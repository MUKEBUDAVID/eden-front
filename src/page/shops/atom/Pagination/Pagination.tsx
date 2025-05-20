import  { useState,JSX } from 'react';
import './Pagination.scss'; // Le fichier Sass reste identique

// Définition des props avec TypeScript
interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number; // Optionnel : nombre de pages visibles
}
//  React.FC<PaginationProps> 

function Pagination ({totalItems,
    itemsPerPage,
    onPageChange,
    maxVisiblePages = 5, // Valeur par défaut
}:PaginationProps) {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Gestion robuste du changement de page
  const handlePageChange = (page: number): void => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  // Génération des numéros de page avec typage
  const renderPageNumbers = (): JSX.Element[] => {
    const pages: JSX.Element[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Ajustement pour les cas limites
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Création des boutons de page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-page ${currentPage === i ? 'active' : ''}`}
          aria-label={`Page ${i}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  // Rendu conditionnel pour éviter la pagination inutile
  if (totalPages <= 1) return null;

  return (
    <div className="pagination-container" role="navigation" aria-label="Pagination">
      {/* Première page */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="pagination-nav"
        aria-label="First page"
      >
        «
      </button>

      {/* Page précédente */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-nav"
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Numéros de page */}
      {renderPageNumbers()}

      {/* Page suivante */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-nav"
        aria-label="Next page"
      >
        ›
      </button>

      {/* Dernière page */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="pagination-nav"
        aria-label="Last page"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
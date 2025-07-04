// Select.tsx
import { useState, useRef, useEffect } from 'react';
import "./select.scss"; // Import du fichier Sass

interface SelectOption {
  value: string;
  label: string;
  
}

interface CustomSelectProps {
  options: SelectOption[];
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  reset?:string;
  onChange?: (value: string) => void;
}

function Select ({
  options,
  defaultValue = "",
  placeholder = "Sélectionnez...",
  disabled = false,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange?.(value);
  };

  const selectedLabel = options.find((opt) => opt.value === selectedValue)?.label || placeholder;

  return (
    <div
      ref={selectRef}
      className={`select ${disabled ? 'select--disabled' : ''} ${isOpen ? 'select--open' : ''}`}
    >
      <div className="select__header" onClick={() => !disabled && setIsOpen(!isOpen)}>
        <span className="select__selected-value">{disabled===false? selectedLabel:placeholder}</span>
        <span className="select__arrow">▼</span>
      </div>

      {isOpen && (
        <ul className="select__options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`select__option ${
                selectedValue === option.value ? 'select__option--selected' : ''
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
import Image from "next/image";
import styles from "./page.module.scss";
import Navlink from "@/utils/Navlink";

export default function Home() {
  return (
    <>
    <header>
      <div className={styles.left}>
     <img src="./img/eden_Logos-05.png" alt="eden logo"  />
      <span>Eden</span>
      </div>

      <nav>
     <Navlink href="/" style="" activeStyle="" >Home</Navlink>


      </nav>
      

    </header>

      <main >
        
      </main>
      <footer >
      
      </footer>
    </>
  );
}

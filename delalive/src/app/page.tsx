import Image from "next/image";
import styles from "./page.module.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Component/Main";

export default function Home() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
    
  );
}

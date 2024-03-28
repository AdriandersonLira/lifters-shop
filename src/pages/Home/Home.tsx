import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";
import { Products } from "../../components/Products/Products";
import { SideBar } from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <div className={styles.container}>
        <aside>
          <SideBar data={products} />
        </aside>
        <main>
          <Products data={products} />
        </main>
      </div>
    </>
  );
}

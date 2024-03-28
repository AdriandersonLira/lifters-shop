import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";
import { Products } from "../../components/Products/Products";
import { SideBar } from "../../components/Sidebar/Sidebar";
import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.container}>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Products />
        </main>
      </div>
    </>
  );
}

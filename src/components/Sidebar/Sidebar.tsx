import { IData } from "../../types/IData";
import { CheckBox } from "../CheckBox/CheckBox";
import { ColorCircle } from "../ColorCircle/ColorCircle";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  data: IData[];
}

export function SideBar({ data }: SidebarProps) {
  const categories = Array.from(
    new Set(data.map((product) => product.categoria))
  );

  const handleFilterColors = (data: IData[]) => {
    const allColors = Array.from(new Set(data.map((product) => product.cores)));

    let colorsUniques: { [nome: string]: string } = {};

    allColors.forEach((items) => {
      items.forEach((cor) => {
        colorsUniques[cor.nome] = cor.codigo;
      });
    });

    const colors = Object.keys(colorsUniques).map((nome) => ({
      nome,
      codigo: colorsUniques[nome],
    }));

    return colors;
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <p>Filters</p>

        <a href="#">Clear filters</a>
      </div>

      <div className={styles.categories}>
        <p>Categories</p>

        {categories.map((category, index) => {
          return (
            <CheckBox
              key={index}
              id={index}
              label={category}
              checked={category === "Jackets" && true}
            />
          );
        })}
      </div>

      <div className={styles.colors}>
        <p>Color</p>

        <div className={styles.colorsContainer}>
          {handleFilterColors(data).map((color) => {
            return (
              <ColorCircle key={color.nome} color={color.codigo} size="30px" />
            );
          })}
        </div>
      </div>
    </div>
  );
}

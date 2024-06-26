import { IData } from "../../types/IData";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

interface ProductsProps {
  data: IData[];
}

export function Products({ data }: ProductsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.length}>Showing {data.length} Products</p>
      <div className={styles.wrapper}>
        {data.map((product) => (
          <div className={styles.product} key={product.titulo}>
            <Link
              to={`/product/${product.titulo}`}
              state={{ product: product }}
            >
              <img
                src={
                  product.fotos.filter(
                    (picture) => picture.capa === true && picture.url
                  )[0].url
                }
                alt={product.titulo}
              />
              <div>
                <p>{product.titulo}</p>
                <span>{product.valor}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

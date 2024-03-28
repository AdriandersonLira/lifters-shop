import { useLocation, useNavigate } from "react-router";
import { useBagContext } from "../../providers/Bag.provider";

import { ColorCircle } from "../../components/ColorCircle/ColorCircle";
import { Header } from "../../components/Header/Header";
import { IData } from "../../types/IData";

import styles from "./Product.module.css";
import { NotFound } from "../../components/NotFound/NotFound";

interface Image {
  url: string;
  capa: boolean;
}

export function Product() {
  const { state } = useLocation();
  const product = state.product as IData;
  const navigate = useNavigate();

  if (!product) {
    return <NotFound />;
  }

  const { items, setItems } = useBagContext();

  const organizeCoverFirst = (pictures: Image[]): Image[] => {
    const firstPicture = pictures.find((picture) => picture.capa);

    if (firstPicture) {
      const index = pictures.indexOf(firstPicture);

      if (index !== -1) {
        pictures.splice(index, 1);
        pictures.unshift(firstPicture);
      }
    }

    return pictures;
  };

  return (
    <div className={styles.product}>
      <Header />

      <div className={styles.container}>
        <div className={styles.pictures}>
          {organizeCoverFirst(product.fotos).map((picture) => (
            <img
              key={picture.url}
              className={styles.picture}
              src={picture.url}
              alt={product.titulo}
            />
          ))}
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.title}>{product.titulo}</p>
            <p className={styles.price}>{product.valor}</p>
            <p className={styles.description}>{product.descricao}</p>

            <div className={styles.colors}>
              <p className={styles.colorsTitle}>Color</p>
              <div className={styles.colorsContainer}>
                {product.cores.map((color) => (
                  <a href="" key={color.codigo}>
                    <ColorCircle color={color.codigo} size="50px" />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.size}>
              <p className={styles.sizeTitle}>Size</p>
              <div className={styles.sizeContainer}>
                {product.tamanhos.map((size) => (
                  <a href="" key={size}>
                    <p>{size}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button onClick={() => setItems([product, ...items])}>
              <i className="bi bi-bag"></i> Add to bag
            </button>
            <a onClick={() => navigate("/")}>Back</a>
          </div>
        </div>
      </div>
    </div>
  );
}

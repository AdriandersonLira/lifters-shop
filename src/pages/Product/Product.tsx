import { useLocation, useNavigate } from "react-router";
import { ColorCircle } from "../../components/ColorCircle/ColorCircle";
import { Header } from "../../components/Header/Header";
import { IData } from "../../types/IData";
import styles from "./Product.module.css";

export function Product() {
  const { state } = useLocation();
  const product = state.product as IData;

  if (!product) {
    return <div style={{ textAlign: "center" }}>Produto não encontrado!</div>;
  }
  const navigate = useNavigate();

  return (
    <div className={styles.product}>
      <Header />

      <div className={styles.container}>
        <div className={styles.pictures}>
          {product.fotos.map((picture) => (
            <img src={picture.url} alt={product.titulo} />
          ))}
        </div>
        <div className={styles.details}>
          <h1>{product.titulo}</h1>
          <p>{product.valor}</p>
          <p>{product.descricao}</p>

          <div className={styles.colors}>
            <p>Colors</p>
            <div className={styles.colorsContainer}>
              {product.cores.map((color) => (
                <ColorCircle color={color.nome} size="25px" />
              ))}
            </div>
          </div>

          <div className={styles.size}>
            <p>Size</p>
            <div className={styles.sizeContainer}>
              {product.tamanhos.map((size) => (
                <p>{size}</p>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#">Add to cart</a>
            <a onClick={() => navigate("/")}>Back</a>
          </div>
        </div>
      </div>
    </div>
  );
}

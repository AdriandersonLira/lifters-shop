import { useNavigate } from "react-router-dom";
import { useBagContext } from "../../providers/Bag.provider";

import { Header } from "../../components/Header/Header";

import styles from "./Checkout.module.css";
import { ColorCircle } from "../../components/ColorCircle/ColorCircle";

export function Checkout() {
  const navigate = useNavigate();
  const { items, setItems } = useBagContext();

  return (
    <div>
      <Header />
      <div className={styles.bodyCheckout}>
        <div className={styles.headerCheckout}>
          <div>
            <i className="bi bi-bag"></i>
            <h1>Your bag</h1>
          </div>
          <a className={styles.back} onClick={() => navigate("/")}>
            Back
          </a>
        </div>

        <div className={styles.infos}>
          <div className={styles.items}>
            {items.length > 0 ? (
              <div className={styles.checkout}>
                {items.map((item, index) => (
                  <div className={styles.item} key={index}>
                    <img
                      src={
                        item.fotos.filter(
                          (picture) => picture.capa === true && picture.url
                        )[0].url
                      }
                      alt={item.titulo}
                    />
                    <div className={styles.info}>
                      <div className={styles.infoContent}>
                        <p className={styles.title}>{item.titulo}</p>
                        <span className={styles.price}>{item.valor}</span>
                      </div>

                      <div className={styles.options}>
                        <div className={styles.sizeColor}>
                          <p className={styles.size}>{item.tamanhos[0]}</p>

                          <ColorCircle
                            color={item.cores[0].codigo}
                            size="17px"
                          />
                        </div>

                        <button
                          onClick={() => {
                            items.splice(index, 1);
                            setItems([...items]);
                          }}
                          className={styles.remove}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <hr />

                <div className={styles.total}>
                  <span>Total:</span>
                  <span className={styles.priceTotal}>
                    $
                    {items.reduce(
                      (acc, item) => acc + Number(item.valor.substring(1)),
                      0
                    )}
                  </span>
                </div>

                <button onClick={() => {}} className={styles.buttonCheckout}>
                  Checkout
                </button>
              </div>
            ) : (
              <div className={styles.bagEmpty}>
                <h3>
                  <i className="bi bi-emoji-frown-fill"></i>
                </h3>
                <p>Your bag is empty</p>
                <p>Add products to your bag</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

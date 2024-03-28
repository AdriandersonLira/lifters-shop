import { useNavigate } from "react-router-dom";
import { useBagContext } from "../../providers/Bag.provider";
import { ColorCircle } from "../ColorCircle/ColorCircle";
import styles from "./BagPreview.module.css";

export function BagPreview() {
  const { items, setItems, setShow } = useBagContext();
  const navigate = useNavigate();

  return (
    <div className={styles.bagPreview}>
      <div className={styles.content}>
        {items.length > 0 ? (
          <div className={styles.checkout}>
            <div className={styles.items}>
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

                        <ColorCircle color={item.cores[0].codigo} size="17px" />
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
            </div>
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

            <button
              onClick={() => {
                navigate("/checkout");
                setShow(false);
              }}
              className={styles.buttonCheckout}
            >
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
  );
}

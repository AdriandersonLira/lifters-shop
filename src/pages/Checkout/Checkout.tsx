import { Popover } from "react-bootstrap";
import styles from "./Checkout.module.css";

export function Checkout() {
  return (
    <Popover className={styles.popover}>
      <Popover.Body>Vamos fazer o provider</Popover.Body>
    </Popover>
  );
}

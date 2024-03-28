import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { BagPreview } from "../BagPreview/BagPreview";
import { useBagContext } from "../../providers/Bag.provider";

export function Header() {
  const { items, show, setShow } = useBagContext();
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <a onClick={() => navigate("/")} className={styles.logo}>
        Lifters Shop
      </a>

      <nav className={styles.navMenu}>
        <ul className={styles.navList}>
          <li>Shop</li>
          <li>Stories</li>
          <li>About</li>
          <li>
            <i className="bi bi-search"></i> <span>Search</span>
          </li>
        </ul>
      </nav>

      <nav className={styles.navLogin}>
        {
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            show={show}
            overlay={
              <Popover className={styles.popover}>
                <Popover.Body className={styles.popoverBody}>
                  <BagPreview />
                </Popover.Body>
              </Popover>
            }
          >
            <div style={{ cursor: "pointer" }} onClick={() => setShow(!show)}>
              <i className="bi bi-bag"></i>
              <span className="badge">{items.length}</span>
            </div>
          </OverlayTrigger>
        }
        <a href="#"></a>
        <a href="#">Login</a>
      </nav>
    </div>
  );
}

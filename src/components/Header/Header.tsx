import styles from "./Header.module.css";
import { OverlayTrigger, Popover } from "react-bootstrap";

export function Header() {
  return (
    <div className={styles.header}>
      <a href="/" className={styles.logo}>
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
            overlay={
              <Popover className={styles.popover}>
                <Popover.Body>Vamos fazer o provider</Popover.Body>
              </Popover>
            }
          >
            <div style={{ cursor: "pointer" }}>
              <i className="bi bi-bag"></i>
              <span className="badge">3</span>
            </div>
          </OverlayTrigger>
        }
        <a href="#"></a>
        <a href="#">Login</a>
      </nav>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { OverlayTrigger, Popover } from "react-bootstrap";

export function Header() {
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

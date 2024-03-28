import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>Lifters Shop</p>

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
        <a href="#">
          <i className="bi bi-bag"></i>
        </a>
        <a href="#">Login</a>
      </nav>
    </div>
  );
}

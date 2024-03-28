import styles from "./Banner.module.css";

export function Banner() {
  return (
    <div className={styles.banner}>
      <p className={styles.bannerText}>Shop Men's</p>

      <p className={styles.description}>
        Revamp your style with the latest designer trends in men’s clothing or
        achieve a perfectly curated wardrobe thanks to our line-up of timeless
        pieces.
      </p>
    </div>
  );
}

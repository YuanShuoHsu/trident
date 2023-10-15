import styles from "./index.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.logo__head}></span>
      <span className={styles.logo__eye}></span>
    </div>
  );
}

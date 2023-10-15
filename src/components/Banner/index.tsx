import styles from "./index.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__imgBox}>
        <img className={styles.banner__image} alt="白頭翁 (Chinese bulbul)" />
      </div>
      <div className={styles.banner__content}>
        <h1 className={styles.banner__title}>白頭翁 (Chinese bulbul)</h1>
        <p className={styles.banner__description}>
          又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
          年。
        </p>
      </div>
    </div>
  );
}

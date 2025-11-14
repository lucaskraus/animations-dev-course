import styles from "./index.module.css";

export default function OrbitLoader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} />
      <div className={styles.orbitingCircle} />
    </div>
  );
}

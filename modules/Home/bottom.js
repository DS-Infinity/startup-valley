import styles from "./bottom.module.scss";

const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <p className={styles.text}>(scroll further)</p>
      <p className={styles.text}>skip</p>
    </div>
  );
};

export default Bottom
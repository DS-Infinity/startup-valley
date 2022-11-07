import styles from "./index.module.scss";
import Nav from "./nav";
import Bottom from "./bottom";
import Main from "./main";

export default function Content() {
  return (
    <div className={styles.main}>
      <Nav />
      <Bottom />
      <Main />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
    </div>
  );
}

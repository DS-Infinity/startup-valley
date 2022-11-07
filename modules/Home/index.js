import styles from "./index.module.scss";
import Nav from "./nav";
import Bottom from "./bottom";

export default function Content() {
  return (
    <div className={styles.main}>
      <Nav />
      <Bottom />
    </div>
  );
}

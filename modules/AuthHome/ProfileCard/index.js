import styles from './index.module.scss';
export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__stats}>
        <div className={styles.card__stats__left}>
          <div className={styles.card__stats__left__stat}>capital earned</div>
          <div className={styles.card__stats__left__stat}>current standing</div>
          <div className={styles.card__stats__left__stat}>total slaves</div>
          <div className={styles.card__stats__left__stat}>companies bested</div>
        </div>

        <div className={styles.card__stats__right}>
          <div className={styles.card__stats__right__stat}>$0</div>
          <div className={styles.card__stats__right__stat}>
            current standing
          </div>
          <div className={styles.card__stats__right__stat}>total slaves</div>
          <div className={styles.card__stats__right__stat}>
            companies bested
          </div>
        </div>
      </div>

      <div className={styles.card__image}></div>
    </div>
  );
}

import styles from './index.module.scss';
import useUser from '../../../utils/hooks/useUser';
export default function ProfileCard() {
  const { user } = useUser();
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
          <div className={styles.card__stats__right__stat}>{user.position}</div>
          <div className={styles.card__stats__right__stat}>
            {user.slaves.length}
          </div>
          <div className={styles.card__stats__right__stat}>
            companies bested
          </div>
        </div>
      </div>

      <div className={styles.card__image}></div>
    </div>
  );
}

import styles from './index.module.scss';
import useUser from '../../../utils/hooks/useUser';

import Men from '../../../public/men.png';
import Women from '../../../public/women.png';

import Image from 'next/image';
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
          <div className={styles.card__stats__right__stat}>{user.money}</div>
          <div className={styles.card__stats__right__stat}>
            #{user.position}
          </div>
          <div className={styles.card__stats__right__stat}>
            {user.slaves.length < 10
              ? `0${user.slaves.length}`
              : user.slaves.length}
          </div>
          <div className={styles.card__stats__right__stat}>
            {user.companiesBested.length < 10
              ? `0${user.companiesBested.length}`
              : user.companiesBested.length}
          </div>
        </div>
      </div>

      <div className={styles.card__image}>
        {user.avatar == 0 ? <Image src={Women} /> : <Image src={Men} />}
        <div className={styles.card__image__text}>you</div>
      </div>
    </div>
  );
}

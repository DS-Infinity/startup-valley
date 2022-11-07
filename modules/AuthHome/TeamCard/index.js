import styles from './index.module.scss';
import { useState } from 'react';
export default function ProfileCard() {
  const [slaves, setSlaves] = useState([]);

  return (
    <div className={styles.card}>
      {slaves.map((slave, index) => {
        return (
          <div className={styles.card__slave} key={index}>
            <div className={styles.card__slave__image}>
              <img src={slave.avatar} />
            </div>

            <div className={styles.card__slave__name}>{slave.name}</div>
            <div className={styles.card__slave__faction}>{slave.faction}</div>
          </div>
        );
      })}
    </div>
  );
}

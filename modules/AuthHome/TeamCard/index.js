import styles from './index.module.scss';
import { useState } from 'react';
import useUser from '../../../utils/hooks/useUser';

import Image from 'next/image';
import Men from '../../../public/men.png';
import Women from '../../../public/women.png';

export default function ProfileCard() {
  const { user } = useUser();

  return (
    <div className={styles.card}>
      {user.slaves.map((slave, index) => {
        return (
          <div className={styles.card__slave} key={index}>
            <div className={styles.card__slave__avatar}>
              {slave.avatar == 0 ? <Image src={Women} /> : <Image src={Men} />}
            </div>

            <div className={styles.card__slave__name}>{slave.name}</div>
            <div className={styles.card__slave__post}>{slave.post}</div>
          </div>
        );
      })}
    </div>
  );
}

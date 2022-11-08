import styles from './index.module.scss';
import useUser from '../../../utils/hooks/useUser';

import Men from '../../../public/men.png';
import Women from '../../../public/women.png';

import Image from 'next/image';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
export default function TournamentCard({ tournament, enrolled }) {
  const { user } = useUser();
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>{tournament.name}</div>

      <div className={styles.card__stats}>
        <div className={styles.card__stats__stat}>
          <div className={styles.card__stats__stat__name}>prize amount:</div>
          <div className={styles.card__stats__stat__value}>
            ${tournament.prize}
          </div>
        </div>

        {enrolled && (
          <div className={styles.card__stats__stat}>
            <div className={styles.card__stats__stat__name}>
              current position:
            </div>
            <div className={styles.card__stats__stat__value}>#1</div>
          </div>
        )}

        <div className={styles.card__stats__stat}>
          <div className={styles.card__stats__stat__name}>
            total participants:
          </div>
          <div className={styles.card__stats__stat__value}>
            {tournament.participants.length}
          </div>
        </div>
      </div>

      <div className={styles.card__hr} />

      <PrimaryButton >Balls</PrimaryButton>
    </div>
  );
}

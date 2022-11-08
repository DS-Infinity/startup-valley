import styles from './index.module.scss';
import Image from 'next/image';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const SlaveCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src='/men.png' width={240} />
      </div>
      <div className={styles.card__content}>
        <h2>Subaru</h2>
        <div className={styles.card__content__stats}>
          <div className={styles.card__content__stats__stat}>
            <div>field:</div>
            <div>engineering</div>
          </div>
          <div className={styles.card__content__stats__stat}>
            <div>price:</div>
            <div>$10,000</div>
          </div>
        </div>
        <hr />
        <div className={styles.card__content__buttons}>
          <PrimaryButton style={{ background: '#A1A34E' }}>stats</PrimaryButton>
          <PrimaryButton>hire</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.textshit}>
          <h2>recruiting</h2>
          <h3>the best startup deserves the best team</h3>
          <p>offers expiring in 13:02:24</p>
        </div>
        <div className={styles.main__content}>
          <SlaveCard />
          <SlaveCard />
          <SlaveCard />
          <SlaveCard />
        </div>
      </div>
    </div>
  );
};

export default Content;

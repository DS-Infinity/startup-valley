import styles from './index.module.scss';
import Image from 'next/image';
import Men from '../../public/men.png';
import Women from '../../public/women.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

import useUser from '../../utils/hooks/useUser';

import { slaves } from '../../utils/data';
import axios from '../../utils/axios';

const SlaveCard = ({ slave }) => {
  const { user } = useUser();

  const hire = async (slave) => {
    if (user.money < slave.price) return alert('not enough money');

    const { data } = await axios.post('/api/slaves', { id: slave.id });

    
  };
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {slave.avatar === 0 ? (
          <Image src={Women} width={240} />
        ) : (
          <Image src={Men} width={240} />
        )}
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__name}>{slave.name}</div>
        <div className={styles.card__content__stats}>
          <div className={styles.card__content__stats__stat}>
            <div>field:</div>
            <div>{slave.faction}</div>
          </div>
          <div className={styles.card__content__stats__stat}>
            <div>price:</div>
            <div>{slave.price}</div>
          </div>
        </div>
        <hr />
        <div className={styles.card__content__buttons}>
          <PrimaryButton style={{ background: '#A1A34E' }}>stats</PrimaryButton>
          <PrimaryButton
            onClick={() => {
              hire(slave);
            }}
          >
            hire
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  const { user } = useUser();

  if (!user) return null;

  const difference = slaves.filter(
    (x) => !user.slaves.some((y) => y.id === x.id)
  ); //slaves which the user can still buy (that is meant to sound wrong)

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.textshit}>
          <div>recruiting</div>
          <div>the best startup deserves the best team</div>
          <div>offers expiring in 13:02:24</div>
        </div>
        <div className={styles.main__content}>
          {difference.map((slave) => {
            return <SlaveCard slave={slave} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;

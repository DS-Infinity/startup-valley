import { useEffect, useRef, useState } from 'react';
import useOnClickOutside, { Popup } from '../../../components/Popup';
import styles from '../index.module.scss';

const StatsPopup = ({ openState, slave }) => {
  const [open, setOpen] = useState(true);
  const ref = useRef(null);
  let people = [
    'ds infinity',
    'tperm',
    'procastinator',
    'endless debugger',
    'kavin',
    'vishesh',
    'shinji',
    'sakura',
    'kaguya',
    'sasuke',
    'naruto',
  ];

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    setOpen(openState);
  }, [openState]);

  return (
    <Popup
      popupState={open}
      crossHandler={() => {
        setOpen(false);
      }}
      ref={ref}
      center
      style={{ width: '500px', minWidth: '0', minHeight: '0', height: '320px' }}
    >
      <div className={styles.leaderboard}>
        <h1>{`${slave.name} (${slave.faction})`}</h1>
        <div>
          <div className={styles.leaderboard__row}>
            <div>stat</div>
            <div>level</div>
          </div>
          {Object.keys(slave.stats).map((stat, i) => (
            <div className={styles.leaderboard__row2}>
              <div>{stat}</div>
              <div>{slave.stats[stat]}</div>
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default StatsPopup;

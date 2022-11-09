import { useEffect, useRef, useState } from 'react';
import useOnClickOutside, { Popup } from '../../../../components/Popup';
import styles from '../index.module.scss';

const LeaderboardPopup = ({ tournament, user, openState, participants }) => {
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

  if (open) {
    console.log('participants', participants);
  }

  return (
    <Popup
      popupState={open}
      crossHandler={() => {
        setOpen(false);
      }}
      ref={ref}
      center
      style={{ width: '400px', minWidth: '0' }}
    >
      <div className={styles.leaderboard}>
        <h1>leaderboard bisch</h1>
        <div>
          <div className={styles.leaderboard__row}>
            <div>rank</div>
            <div>name</div>
          </div>
          {people.splice(0, participants).map((person, i) => (
            <div className={styles.leaderboard__row2}>
              <div>#{i + 1}</div>
              <div>{person}</div>
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default LeaderboardPopup;

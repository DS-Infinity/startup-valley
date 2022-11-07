import styles from './main.module.scss';
import Plx from 'react-plx';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { useRouter } from 'next/router';
import { Popup, useOnClickOutside } from '../../components/Popup';
import { useRef, useState } from 'react';

const dialogues = [
  'once upon a time...',
  'there existed a hero named angad kar...',
  'he sought to make the perfect startup',
  'but alas, a mutiny prevented him from fullfilling his dream',
  'he has selected you as his heir...',
  'do you have what it takes to assemble the perfect team?',
  'buttons',
];

const Text = ({ text }) => {
  return <p className={styles.text}>{text}</p>;
};

const Buttons = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className={styles.buttons}>
      <PrimaryButton
        style={{
          width: '220px',
          fontSize: '40px',
          height: '75px',
          background: '#47AF58',
        }}
        onClick={() => router.push('/login')}
      >
        yes
      </PrimaryButton>
      <PrimaryButton
        style={{
          width: '220px',
          fontSize: '40px',
          height: '75px',
          background: '#B43A3A',
        }}
        onClick={() => setOpen(true)}
      >
        no
      </PrimaryButton>
    </div>
  );
};

const Main = () => {
  return (
    <div className={styles.main}>
      {dialogues.map((d, i) => {
        const parallaxData = [];

        if (i != 0) {
          parallaxData.push({
            start: '0vh',
            end: `${(i + 1) * 100}vh`,
            properties: [
              { startValue: 0, endValue: 0, property: 'opacity' },
              {
                property: 'translateY',
                startValue: 100,
                endValue: 100,
              },
              { property: 'scale', startValue: 0.8, endValue: 0.8 },
            ],
          });
          parallaxData.push({
            start: `${(i + 1) * 100}vh`,
            end: `${(i + 1) * 100 + 25}vh`,
            properties: [
              { startValue: 0, endValue: 1, property: 'opacity' },
              {
                property: 'translateY',
                startValue: 100,
                endValue: 0,
              },
              { property: 'scale', startValue: 0.8, endValue: 1 },
            ],
          });
        }

        if (i + 1 != dialogues.length) {
          parallaxData.push({
            start: `${(i + 2) * 100}vh`,
            end: `${(i + 2) * 100 + 25}vh`,
            properties: [
              { startValue: 1, endValue: 0, property: 'opacity' },
              {
                property: 'translateY',
                startValue: 0,
                endValue: -100,
              },
              { property: 'scale', startValue: 1, endValue: 0.8 },
            ],
          });
        }
        return (
          <Plx parallaxData={parallaxData} className={styles.fixed}>
            {d === 'buttons' ? <Buttons /> : <Text text={d} />}
          </Plx>
        );
      })}
    </div>
  );
};

export default Main;

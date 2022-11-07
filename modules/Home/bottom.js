import styles from './bottom.module.scss';
import Plx from 'react-plx';

const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <Plx
        parallaxData={[
          {
            start: `700vh`,
            end: `725vh`,
            properties: [{ startValue: 1, endValue: 0, property: 'opacity' }],
          },
        ]}
      >
        <p className={styles.text}>(scroll further)</p>
      </Plx>
      <p
        className={styles.text}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 7,
            behavior: 'smooth',
          });
        }}
      >
        skip
      </p>
    </div>
  );
};

export default Bottom;

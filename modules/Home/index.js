import styles from './index.module.scss';
import Bottom from './bottom';
import Main from './main';
import useUser from '../../utils/hooks/useUser';

const Content = () => {
  const { user } = useUser();
  return (
    <div className={styles.main}>
      <Bottom />
      <Main />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
      <div className={styles.child} />
    </div>
  );
};

export default Content;

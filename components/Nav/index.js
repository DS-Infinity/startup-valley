import styles from './index.module.scss';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import useUser from '../../utils/hooks/useUser';

const Nav = () => {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    return (
      <div className={styles.nav}>
        <div className={styles.nav__logo}></div>
        <div className={styles.nav__links}>
          <div className={styles.nav__links__link}>forum</div>
          <div className={styles.nav__links__link}>download</div>

          <PrimaryButton
            onClick={() => {
              router.push('/login');
            }}
          >
            start recruiting
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}></div>

      <div className={styles.nav__center}>
        <a className={styles.nav__links__link} href="/home">
          home
        </a>
        <a className={styles.nav__links__link} href="/forum">
          forum
        </a>
        <a className={styles.nav__links__link} href="/shop">
          shop
        </a>
        <a className={styles.nav__links__link} href="/download">
          download
        </a>
      </div>

      <div className={styles.nav__links}>
        <PrimaryButton
          onClick={() => {
            signOut();
          }}
        >
          logout
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Nav;

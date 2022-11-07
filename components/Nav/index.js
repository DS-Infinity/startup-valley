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
        <PrimaryButton
          onClick={() => {
            router.push('/login');
          }}
        >
          start recruiting
        </PrimaryButton>
      </div>
    );
  }

  return (
    <div className={styles.nav}>
      <PrimaryButton
        onClick={() => {
          signOut();
        }}
      >
        logout
      </PrimaryButton>
    </div>
  );
};

export default Nav;

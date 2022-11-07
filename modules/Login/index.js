import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Navbar from '../../components/Navbar/Navbar';
import styles from './index.module.scss';

const LoginModule = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Navbar />
      <PrimaryButton
        onClick={() => {
          signIn();
        }}
      >
        login with twitch
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          signIn();
        }}
      >
        login with discord
      </PrimaryButton>
    </div>
  );
};

export default LoginModule;

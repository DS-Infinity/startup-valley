import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

import styles from './index.module.scss';

const LoginModule = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <PrimaryButton
        onClick={() => {
          signIn('twitch');
        }}
      >
        login with twitch
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          signIn('discord');
        }}
      >
        login with discord
      </PrimaryButton>
    </div>
  );
};

export default LoginModule;

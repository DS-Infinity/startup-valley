import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Nav from '../Home/nav';
import styles from './index.module.scss';

const LoginModule = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.box}>
        <div className={styles.dots}>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.boxContent}>
          <h1>start recruiting</h1>
          <div className={styles.content}>
            <PrimaryButton
              style={{ width: '100%', background: '#8239AE' }}
              onClick={() => {
                signIn('twitch');
              }}
            >
              login with twitch
            </PrimaryButton>
            <PrimaryButton
              style={{
                width: '100%',
                marginTop: '24px',
                background: '#503BD1',
              }}
              onClick={() => {
                signIn('discord');
              }}
            >
              login with discord
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModule;

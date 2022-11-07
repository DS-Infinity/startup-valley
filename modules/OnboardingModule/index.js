import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { Popup, useOnClickOutside } from '../../components/Popup';
import { useState } from 'react';

import styles from './index.module.scss';

const LoginModule = () => {
  const { data: session } = useSession();
  const [popupOpen, setPopupOpen] = useState(false);
  const ref = useOnClickOutside(() => setPopupOpen(false));

  return (
    <div className={styles.container}>
      <PrimaryButton
        onClick={() => {
          signIn('twitch');
        }}
      >
        sign in with twitch
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          signIn('discord');
        }}
      >
        sign in with discord
      </PrimaryButton>

      <Popup popupState={popupOpen} ref={ref} center>
        <div>
          <h1>hey</h1>
        </div>
      </Popup>
    </div>
  );
};

export default LoginModule;

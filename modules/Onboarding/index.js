import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Nav from '../../components/Nav';
import styles from './index.module.scss';
import { Popup, useOnClickOutside } from '../../components/Popup';
import { useState, useEffect, useRef } from 'react';
import OnbaordingPopup from "./OnbaordingPopup";
import Input from '../../components/Input';

const LoginModule = () => {
  const { data: session } = useSession();
  const [popupOpen, setPopupOpen] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPopupOpen(true);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
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

      <Popup popupState={popupOpen} noShowCross={pageNum === 1} crossHandler={function ok () {setPageNum(pageNum - 1)}}  heading1={pageNum === 1 ? `hey...` : 'great...'} heading2={pageNum === 1 ?   `wait what was your name?` : 'now choose your look, wisely'} center>
        <OnbaordingPopup pageNum={pageNum}  setPageNum={setPageNum}>
        </OnbaordingPopup>
      </Popup>
    </div>
  );
};

export default LoginModule;

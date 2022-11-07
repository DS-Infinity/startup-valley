import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Nav from '../../components/Nav';
import styles from './index.module.scss';
import { Popup, useOnClickOutside } from '../../components/Popup';
import { useState, useEffect, useRef } from 'react';

const LoginModule = () => {
  const { user } = useUser();

  return <div className={styles.container}></div>;
};

export default LoginModule;

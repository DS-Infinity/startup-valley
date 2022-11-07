import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Nav from '../../components/Nav';
import styles from './index.module.scss';
import { Popup, useOnClickOutside } from '../../components/Popup';
import { useState, useEffect, useRef } from 'react';
import useUser from '../../utils/hooks/useUser';

const Content = () => {
  const { user } = useUser();

  if (user) {
    return (
      <div className={styles.main}>
        <div className={styles.main__title}>hey {user.username} </div>

        <div className={styles.main__subtitle}>hey {user.username} </div>
      </div>
    );
  }
};

export default Content;

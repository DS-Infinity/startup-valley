import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import styles from './index.module.scss';
import useUser from '../../utils/hooks/useUser';

const Content = () => {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <div>
        <h1>hey {user.email}</h1>
      </div>
    </div>
  );
};

export default Content;

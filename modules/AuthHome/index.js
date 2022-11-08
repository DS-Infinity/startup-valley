import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Nav from '../../components/Nav';
import PageStyles from '../../styles/pages/index.module.scss';
import { Popup, useOnClickOutside } from '../../components/Popup';
import { useState, useEffect, useRef } from 'react';
import useUser from '../../utils/hooks/useUser';

import ProfileCard from './ProfileCard';
import TeamCard from './TeamCard';
import axios from '../../utils/axios';

const Content = () => {
  const { user } = useUser();
  const [tournaments, setTournaments] = useState([]);

  const getTournaments = async () => {
    const { data } = await axios.get('/api/tournaments');
    setTournaments(data);
  };

  useEffect(() => {
    getTournaments();
  }, []);

  if (user) {
    return (
      <div className={PageStyles.main}>
        <div className={PageStyles.main__section}>
          <div className={PageStyles.main__section__title}>
            hey {user.username}{' '}
          </div>

          <div className={PageStyles.main__section__subtitle}>
            ready for world domination?{' '}
          </div>

          <ProfileCard />
        </div>
        <div className={PageStyles.main__section}>
          <div className={PageStyles.main__section__title}>your team</div>

          <div className={PageStyles.main__section__subtitle}>top brass</div>
          <TeamCard />
        </div>
        <div className={PageStyles.main__section}>
          <div className={PageStyles.main__section__title}>seed rounds</div>

          <div className={PageStyles.main__section__subtitle}>enrolled</div>
          <div className={PageStyles.main__section__grid}></div>
        </div>
      </div>
    );
  }
};

export default Content;

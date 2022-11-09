import { useSession, signIn } from 'next-auth/react';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Nav from '../../components/Nav';
import PageStyles from '../../styles/pages/index.module.scss';
import { Popup, useOnClickOutside } from '../../components/Popup';
import { useState, useEffect, useRef } from 'react';
import useUser from '../../utils/hooks/useUser';

import ProfileCard from './ProfileCard';
import TeamCard from './TeamCard';
import TournamentCard from './TournamentsCard';

import axios from '../../utils/axios';

const Content = () => {
  const { user } = useUser();
  const [tournaments, setTournaments] = useState([]);

  const getTournaments = async () => {
    const { data } = await axios.get('/api/tournaments');
    setTournaments(data.allTournaments);
  };

  useEffect(() => {
    getTournaments();
  }, []);

  if (!user) return null;
  const otherTournaments = tournaments.filter(
    (x) => !user.tournaments.some((y) => y === x._id)
  );

  if (user && tournaments) {
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
          <div className={PageStyles.main__section__grid}>
            {user.tournaments.map((tournament) => {
              return <TournamentCard tournament={tournament} enrolled={true} />;
            })}
          </div>

          <div
            className={PageStyles.main__section}
            style={{ marginTop: '20px' }}
          >
            {otherTournaments.length !== 0 ? (
              <div className={PageStyles.main__section__subtitle}>all</div>
            ) : null}
            <div className={PageStyles.main__section__grid}>
              {otherTournaments.map((tournament) => {
                return (
                  <TournamentCard tournament={tournament} enrolled={false} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Content;

import styles from './index.module.scss';
import useUser from '../../../utils/hooks/useUser';

import Men from '../../../public/men.png';
import Women from '../../../public/women.png';
import { useState } from 'react';

import Image from 'next/image';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import axios from 'axios';
import { useEffect } from 'react';
import LeaderboardPopup from './LeaderboardPopup';
export default function TournamentCard({ tournament, enrolled }) {
  const { user, fetchUser } = useUser();
  const [tournamentData, setTournamentData] = useState(null);
  const [showLeaderboard, setShowLeaderboard] = useState(0);

  const enroll = async () => {
    const { data } = await axios.post('/api/tournaments', {
      id: tournament._id,
    });

    fetchUser();
  };

  const fetchTour = async () => {
    const { data } = await axios.get(`/api/tournament/${tournament}`);
    setTournamentData(data.tournament);
  };

  useEffect(() => {
    if (tournament && enrolled) {
      fetchTour();
    }

    if (!enrolled) {
      setTournamentData(tournament);
    }
  }, [tournament]);

  if (tournamentData)
    return (
      <div className={styles.card}>
        <div className={styles.card__title}>{tournamentData.name}</div>

        <div className={styles.card__stats}>
          <div className={styles.card__stats__stat}>
            <div className={styles.card__stats__stat__name}>prize amount:</div>
            <div className={styles.card__stats__stat__value}>
              ${tournamentData.prize}
            </div>
          </div>

          {enrolled && (
            <div className={styles.card__stats__stat}>
              <div className={styles.card__stats__stat__name}>
                current position:
              </div>
              {console.log(tournamentData)}
              <div className={styles.card__stats__stat__value}>-</div>
            </div>
          )}

          <div className={styles.card__stats__stat}>
            <div className={styles.card__stats__stat__name}>
              total participants:
            </div>
            <div className={styles.card__stats__stat__value}>
              {tournamentData.participants.length}
            </div>
          </div>
        </div>

        <div className={styles.card__hr} />

        <div className={styles.card__stats__stat}>
          <div className={styles.card__stats__stat__name}>next battle in:</div>
          <div className={styles.card__stats__stat__value}>
            {tournamentData.nextRound}
          </div>
        </div>

        {enrolled ? (
          <PrimaryButton
            onClick={() => {
              setShowLeaderboard(showLeaderboard + 1);
            }}
          >
            view leaderboard
          </PrimaryButton>
        ) : (
          <PrimaryButton
            onClick={() => {
              enroll();
            }}
          >
            enroll
          </PrimaryButton>
        )}
        <LeaderboardPopup
          openState={showLeaderboard}
          participants={tournamentData.participants.length}
        />
      </div>
    );
}

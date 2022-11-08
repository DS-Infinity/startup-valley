import { getSession } from 'next-auth/react';
import User from '../../models/User';
import Tournament from '../../models/Tournament';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    if (req.method === 'POST') {
      if (!req.body.id) {
        res.status(400).json({ error: 'Missing ID' });
      }

      const user = await User.findOne({ providerID: session.token.sub });

      const tournament = await Tournament.findOne({ id: req.body.id });

      if (!tournament) {
        res.status(400).json({ error: 'Tournament not found' });
      }

      const updatedTournaments = user.tournaments.concat(tournament);
      const updatedParticipants = tournament.participants.concat(
        user.providerID
      );

      const updatedUser = await User.findOneAndUpdate(
        { providerID: session.token.sub },
        {
          tournaments: updatedTournaments,
        }
      );

      const updatedTournament = await Tournament.findOneAndUpdate(
        {
          id: req.body.id,
        },
        {
          participants: updatedParticipants,
        }
      );

      res.status(200).json({ updatedUser, updatedTournament });
    }
    if (req.method === 'GET') {
      const user = await User.findOne({ providerID: session.token.sub });

      const allTournaments = await Tournament.find({});

      res.status(200).json({ allTournaments });
    }
  }

  res.status(200).json({ error: 'Not authenticated' });
}

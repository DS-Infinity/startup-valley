import { getSession } from 'next-auth/react';
import User from '../../models/User';
import { slaves } from '../../utils/data';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    if (req.method === 'POST') {
      if (!req.body.id) {
        res.status(400).json({ error: 'Missing ID' });
      }

      const user = await User.findOne({ providerID: session.token.sub });

      const slave = slaves.find((slave) => slave.id === req.body.id);

      if (!slave) {
        res.status(400).json({ error: 'Slave not found' });
      }

      const updatedSlaves = user.slaves.concat(slave);

      const updatedUser = await User.findOneAndUpdate(
        { providerID: session.token.sub },
        {
          slaves: updatedSlaves,
          money: user.money - slave.price,
        }
      );

      res.status(200).json({ updatedUser });
    } else res.status(400).json({ error: 'Invalid method' });
  }

  res.status(200).json({ error: 'Not authenticated' });
}

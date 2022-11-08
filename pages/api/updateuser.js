import { getSession } from 'next-auth/react';
import User from '../../models/User';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    if (req.method === 'POST') {
      const body = JSON.parse(req.body);
      if (!body.username || body.female === undefined) {
        res.status(400).json({ error: 'Missing Details', body });
        return;
      }
      const userName = body.username;
      const female = body.female;

      const user = await User.findOneAndUpdate(
        { providerID: session.token.sub },
        {
          username: userName,
          avatar: female ? 0 : 1,
        }
      );
      res.status(200).json({ success: true });
    }
  } else {
    res.status(200).json({ success: false });
  }
}

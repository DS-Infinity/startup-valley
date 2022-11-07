import { getSession } from 'next-auth/react';
import User from '../../models/User';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    const user = await User.findOne({ providerID: session.token.sub });
    console.log(user);
    res.status(200).json({ user });
  }

  res.status(401).json({ error: 'Not authenticated' });
}

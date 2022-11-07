import { getSession } from 'next-auth/react';
import User from '../../models/User';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    const user = await User.findOne({ providerID: session.token.sub });

    let onboardingComplete = false;

    if (user.avatar && user.username) {
      onboardingComplete = true;
    } else {
      onboardingComplete = false;
    }

    res.status(200).json({ user, onboardingComplete });
  }

  res.status(200).json({ error: 'Not authenticated' });
}

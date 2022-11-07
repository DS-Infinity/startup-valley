import NextAuth from 'next-auth';
import TwitchProvider from 'next-auth/providers/twitch';
import DiscordProvider from 'next-auth/providers/discord';

import connectToDB from '../../../utils/connectDB';
import User from '../../../models/User';

connectToDB();

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    }),
    TwitchProvider({
      clientId: process.env.TWITCH_ID,
      clientSecret: process.env.TWITCH_SECRET,
    }),

    // ...add more providers here
  ],
  callbacks: {
    async error(error, _, __) {
      console.log(error);
    },
    async session(session, token, user) {
      session.id = session.token.sub;

      return session;
    },
    async signIn(user, account, profile) {
      const doesUserExist = await User.findOne({ email: user.user.email });
      if (doesUserExist) {
        return true;
      }

      const newUser = await User.create({
        providerID: user.user.id,
        email: user.user.email,
        provider: user.account.provider,
      });

      newUser.save();

      return true;
    },
  },
};

export default NextAuth(authOptions);

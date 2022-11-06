// import { useSession } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import User from '../../models/User';
import mongoose from 'mongoose';

export default async (req, res) => {
  const session = await getSession({ req });
  if (session !== null) {
    const doesUserExist = await User.findOne({ email: session.user.email });
    if (doesUserExist)
      return res.json({
        success: false,
        message: 'User with email already exists',
      });
    else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      });
      await user.save();
      return res.json({
        success: true,
        message: 'User created successfully',
      });
    }
  }
};

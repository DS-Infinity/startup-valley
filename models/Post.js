import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    author: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'User',
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Posts || mongoose.model('Posts', postSchema);

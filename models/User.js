import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: 255,
      required: false,
    },
    email: {
      type: String,
      minlength: 4,
      required: true,
    },
    providerID: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    avatar: {
      type: Number,
      required: false,
    },
    slaves: {
      type: Array,
      required: true,
    },
    companiesBested: {
      type: Array,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', userSchema);

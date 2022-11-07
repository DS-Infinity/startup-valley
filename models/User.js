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
    female: {
      type: Boolean,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
      default:
        'https://media.discordapp.net/attachments/1001775637658353765/1003319839177322639/unknown.png',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', userSchema);

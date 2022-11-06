import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 255,
  },
  email: {
    type: String,
    minlength: 4,
  },
  accountCreationDate: {
    type: Date,
    default: Date.now(),
  },
  avatar: {
    type: String,
    required: true,
    default:
      'https://media.discordapp.net/attachments/1001775637658353765/1003319839177322639/unknown.png',
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
import mongoose from 'mongoose';

const tournamentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    prize: {
      type: Number,
      required: true,
    },
    participants: {
      type: Array,
      required: false,
      default: [],
    },
    nextRound: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Tournament ||
  mongoose.model('Tournament', tournamentSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String,
      required: true
    }
  },
  { timestamps: true } // timestamps automatically adds a 'createdAt' and a 'updatedAt' section for each document
);

module.exports = mongoose.model('workout', workoutSchema)

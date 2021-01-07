const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  type: {
    type: String,
  },
  difficulty: {
    type: String,
  },
  question: {
    type: String,
  },
  correct_answer: {
    type: String,
  },
  incorrect_answers: {
    type: [String],
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Question = mongoose.model("Question", QuizSchema);

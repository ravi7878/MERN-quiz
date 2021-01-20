const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  quizDetail: {
    NumberofQuestions: Number,
    CorrectAnswer: Number,
    SelectCategory: String,
    SelectDifficulty: String,
    SelectType: String,
  },
  quizResult: {
    type: Boolean,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Quiz = mongoose.model("Quiz", QuizSchema);

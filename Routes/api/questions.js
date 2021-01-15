const express = require("express");
const router = express.Router();
const request = require("request");
const Question = require("../../Models/question");
//get api/questions
//description Test Route
//public
router.post("/", async (req, res) => {
  const {
    NumberofQuestions,
    SelectCategory,
    SelectDifficulty,
    SelectType,
  } = req.body;

  request.get(
    `https://opentdb.com/api.php?amount=${NumberofQuestions}&category=18&difficulty=${SelectDifficulty}&type=${SelectType}`,
    function optionalCallback(err, httpResponse, body) {
      const result = JSON.parse(body);
      result.results.forEach((element) => {
        const {
          category,
          type,
          difficulty,
          question,
          correct_answer,
          incorrect_answers,
        } = element;
        let questionmodel = new Question({
          category: category,
          type: type,
          difficulty: difficulty,
          question: question,
          correct_answer: correct_answer,
          incorrect_answers: incorrect_answers,
        });
        questionmodel.save();
      });
      res.json({ question: result.results });
    }
  );
});

router.delete("/", async (req, res) => {
  let user = await Question.deleteMany();
  res.send({ user });
});

module.exports = router;

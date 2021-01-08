const express = require("express");

const router = express.Router();
const Quiz = require("../../Models/quiz");
//post api/quiz
//description result
//public
router.post("/", async (req, res) => {
  try {
    const { userId, quizDetail, quizResult } = req.body;

    let quiz = new Quiz({
      userId: userId,
      quizDetail: quizDetail,
      quizResult: quizResult,
    });
    await quiz.save();
    res.json({ msg: "quiz completed" });
  } catch (err) {
    console.log(err);
    res.status(500).send("sever Error");
  }
});

//get api/quiz
//get all wuiz by user id
//public

router.get("/:userId", async (req, res) => {
  try {
    const quiz = await Quiz.find({
      userId: req.params.userId.toString(),
    });
    res.send({ quiz });
  } catch (err) {
    res.status(500).send("server error");
  }
});
module.exports = router;

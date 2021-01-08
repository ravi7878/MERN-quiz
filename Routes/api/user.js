const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();
const User = require("../../Models/user");

//get api/user
//description Test Route
//public
router.post(
  "/",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("email", "Please Enter valid email").isEmail(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const { name, email } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.json({ msg: "userExist" });
      }
      user = new User({
        name: name,
        email: email,
      });
      await user.save();
      res.json({ msg: "User Registered Successfully" });
    } catch (err) {
      res.status(500).send("server error");
    }
  }
);

module.exports = router;

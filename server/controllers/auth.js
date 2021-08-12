const { info } = require("../util/Info");
const User = require("../models/User");

module.exports.loginController = async (req, res, next) => {
  try {
    const { email } = await info(req.body.headers.jwt);
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json({ message: "Username already exists" });
    } else {
      const newUser = new User({email});
      const result =await newUser.save();
      res.status(200).json({ message: "New user created" });
    }
  } catch (error) {
    next(error);
  }
};

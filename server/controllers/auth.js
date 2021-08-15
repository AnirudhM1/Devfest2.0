const { info } = require("../util/Info");
const User = require("../models/User");
const { oauth, createAppToken } = require("../config/oauth");

module.exports.loginController = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const jwt = await createAppToken({ email, name, id: user._id });
      res.status(200).json({ message: "Username already exists", jwt });
    } else {
      if (name === null || name === "") {
        name = email.split("@")[0];
      }
      const newUser = new User({ email, name });
      const result = await newUser.save();
      const jwt = await createAppToken({ email, name, id: result._id });
      res.status(200).json({ message: "New user created", jwt});
    }
  } catch (error) {
    next(error);
  }
};

module.exports.googleController = async (req, res, next) => {
  try {
    const { email, name } = await oauth(req, next);
    const user = await User.findOne({ email });
    if (user) {
      const oauth = await createAppToken({ email, name, id: user._id });
      res.status(200).json({ message: "User already exists", oauth });
    } else {
      const newUser = new User({ email, name });
      const result = await newUser.save();
      const oauth = await createAppToken({ email, name, id: result._id });
      res.status(200).json({ message: "New user created", oauth });
    }
  } catch (error) {
    next(error);
  }
};

const { info } = require("../util/Info");
const User = require("../models/User");
const {oauth, createAppToken} = require("../config/oauth");

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


module.exports.googleController = async (req, res, next) =>{
  try {
    const {email, name} = await oauth(req, next);
    const user = await User.findOne({ email });
    if (user) {
      const oauth = await createAppToken({email, name});
      res.status(200).json({ message: "User already exists", oauth });
    } else {
      const newUser = new User({email, name});
      const result =await newUser.save();
      const oauth = await createAppToken({email, name})
      res.status(200).json({ message: "New user created", oauth });
    }
  } catch (error) {
    next(error);
  }
}
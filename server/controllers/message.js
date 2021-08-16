const User = require("../models/User");
const Message = require("../models/Message");
const { info } = require("../util/Info");

module.exports.getIncoming = async (req, res, next) => {
  try {
    const { id } = await info(req.headers.jwt);
    const user = await User.findById(id).populate("incomingMessages");
    const messages = user.incomingMessages;
    res.send(messages);
  } catch (err) {
    next(err);
  }
};

module.exports.getSent = async (req, res, next) => {
  try {
    const { id } = await info(req.headers.jwt);
    console.log({ id });
    const user = await User.findById(id).populate("sentMessages");
    const messages = user.sentMessages;
    res.send(messages);
  } catch (error) {
    next(error);
  }
};

module.exports.postMessage = async (req, res, next) => {
  try {
    const { composeTo, header, composeBody } = req.body;
    const recipient = await User.findOne({ email: composeTo });
    const { id } = await info(req.body.headers.jwt);
    const sender = await User.findById(id);

    console.log(composeTo);
    console.log({ sender, recipient });

    const message = new Message({
      sender: sender,
      recipient: recipient,
      message: composeBody,
      header,
    });

    recipient.incomingMessages.push(message);
    sender.sentMessages.push(message);
    await recipient.save();
    await sender.save();
    await message.save();

    res.status(201).send(message);
  } catch (e) {
    e.status = 400;
    next(e);
  }
};

module.exports.postIncoming = async (req, res, next) => {
  try {
    const { composeTo, header, composeBody } = req.body;
    const { _id } = await User.findOne({ email: composeTo });
    const { id } = await info(req.body.headers.jwt);

    const msg = new Message({
      sender: id,
      recipient: _id,
      message: composeBody,
      header,
    });
    await msg.save();
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    next(error);
  }
};

module.exports.postSent = async (req, res, next) => {
  try {
    const { header, message, recipient } = req.body.body;
    const { _id } = await User.findOne({ email: recipient });
    const { id } = await info(req.body.headers.jwt);
    const msg = new Message({
      sender: id,
      recipient: _id,
      message,
      header,
    });
    await msg.save();
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.log(error.name);
    if (error.name === "TypeError") {
      res
        .status(400)
        .json({ message: "This email is not registered in the application" });
    } else {
      next(error);
    }
  }
};

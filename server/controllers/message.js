const User = require("../models/User");
const Message = require("../models/Message");
const { info } = require("../util/Info");

module.exports.getIncoming = async (req, res, next) => {
  try {
    const { id } = await info(req.headers.jwt);
    const docs = [];
    const { incomingMessages } = await User.findById(id);
    incomingMessages.forEach(async (messageId) => {
      const doc = await Message.findById(messageId);
      docs.push(doc);
    });
    res.status(200).json({ docs });
  } catch (err) {
    next(err);
  }
};

module.exports.getSent = async (req, res, next) => {
  try {
    const { id } = await info(req.headers.jwt);
    // const docs = [];
    // const { sentMessages } = await User.findById(id);
    // sentMessages.forEach(async (messageId) => {
    //   const doc = await Message.findById(messageId);
    //   docs.push(doc);
    // });
    // const user = await User.findById(id).populate("sentMessages");
    // const messages = user.sentMessages;
    // res.send(messages);
    const pipeline = [
      {
        $match: {
          sender: {
            $eq: id,
          },
        },
      },
    ];
    const docs = await Message.aggregate(pipeline);
    // const docs = await Message.aggregate(pipeline);
    res.status(200).json({ docs, id });
  } catch (error) {
    next(error);
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

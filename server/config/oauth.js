const { google } = require("googleapis");
const { decode, sign } = require("jsonwebtoken");
const { info } = require("../util/Info");

async function oauth(req, next) {
  try {
    const { code } = req.headers;
    const oauthClient = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      `${process.env.CLIENT}/google/callback`
    );
    const { tokens } = await oauthClient.getToken(code);
    const data = await decode(tokens.id_token);
    return data;
  } catch (error) {
    next(error);
  }
}

async function createAppToken(payload) {
  return await sign(payload, process.env.secret);
}
const authCheck = async (req, res, next) => {
  const jwt = req.method === "GET" ? req.headers.jwt : req.body.headers.jwt;
  try {
    const value = info(jwt);
    if (value) {
      next();
    } else {
      throw Error("Unauthorized");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { oauth, createAppToken, authCheck };

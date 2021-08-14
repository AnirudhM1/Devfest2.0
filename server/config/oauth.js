const { google } = require("googleapis");
const { decode, verify, sign } = require("jsonwebtoken");

async function oauth(req, next) {
  try {
    const { code } = req.headers;
    console.log(code);
    const oauthClient = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      `${process.env.CLIENT}/google/callback`
    );
    const { tokens } = await oauthClient.getToken(code);
    console.log(tokens, code);
    const data = await decode(tokens.id_token);
    console.log(data);
    return data;
  } catch (error) {
    next(error);
  }
}

async function createAppToken(payload) {
  return await sign(payload, process.env.secret);
}

module.exports = { oauth, createAppToken };

const { verify } = require("jsonwebtoken");

async function info(token){
    return verify(token, process.env.secret);
}

module.exports = {info};
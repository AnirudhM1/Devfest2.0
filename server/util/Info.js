const { verify } = require("jsonwebtoken");

async function info(token){
    return await verify(token, process.env.secret);
}

module.exports = {info};
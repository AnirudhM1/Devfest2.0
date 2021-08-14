const router = require("express").Router();
const { loginController, googleController } = require("../controllers/auth");
const { info } = require("../util/Info");

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

router.get("/google", googleController);

router.use(authCheck);

router.post("/login", loginController);

module.exports = router;

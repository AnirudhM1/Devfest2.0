const router = require("express").Router();
const { loginController, googleController } = require("../controllers/auth");
const {authCheck} = require("../config/oauth");

router.get("/google", googleController);

router.use(authCheck);

router.post("/login", loginController);

module.exports = router;

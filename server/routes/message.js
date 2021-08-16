const router = require("express").Router();
const {
  getIncoming,
  getSent,
  postSent,
  postIncoming,
  postMessage,
} = require("../controllers/message");
const { authCheck } = require("../config/oauth");

router.use(authCheck);

router.get("/incoming", getIncoming);
router.get("/sent", getSent);
router.post("/sent", postSent);
router.post("/incoming", postIncoming);
router.post("/", postMessage);

module.exports = router;

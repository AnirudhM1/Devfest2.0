const router = require("express").Router();
const {
  getIncoming,
  getSent,
  postSent,
  postIncoming,
} = require("../controllers/message");
const { authCheck } = require("../config/oauth");

router.use(authCheck);

router.get("/incoming", getIncoming);
router.get("/sent", getSent);
router.post("/sent", postSent);
router.post("/incoming", postIncoming);

module.exports = router;

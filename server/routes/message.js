const router = ("express").Router();
const {authCheck} = require("../config/oauth");

router.get("/incoming");
router.get("/sent");
router.post("/sent");
router.post("/incoming");

module.exports= router;
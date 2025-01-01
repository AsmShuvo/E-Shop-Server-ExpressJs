const express = require("express");
const { addUser, showUser, loginUser } = require("../controller/usersController");
const router = express.Router();


router.post("/", addUser);
router.post("/login", loginUser);
router.get("/", showUser);

module.exports = router;
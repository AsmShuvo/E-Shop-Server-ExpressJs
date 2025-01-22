const express = require("express");
const {
  addUser,
  showUser,
  loginUser,
} = require("../controller/usersController");
const router = express.Router();

router.post("/", addUser);
router.post("/login", loginUser);
router.get("/", showUser); 
router.get("/balance", async (req, res) => {
  const { email } = req.query;
  try {
    const user = await userModel.findOne({ email });
    res.status(200).json({ balance: user.balance });
  } catch (error) {
    res.status(400).json({ error: "Failed to fetch balance" });
  }
});

router.put("/balance", async (req, res) => {
  const { email, newBalance } = req.body;
  try {
    await userModel.updateOne({ email }, { $set: { balance: newBalance } });
    res.status(200).json({ message: "Balance updated successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to update balance" });
  }
});

module.exports = router;

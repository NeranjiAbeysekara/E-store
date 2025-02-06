const express = require("express");
const verifyAdmin = require("../middlewares/auth");

const router = express.Router();

// Protected Admin Route
router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome Admin!", admin: req.user });
});

module.exports = router;

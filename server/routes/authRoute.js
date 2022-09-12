const { Router } = require("express");
const authController = require("../controllers/authController");

const router = new Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.logIn);

module.exports = router;

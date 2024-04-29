const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.get("/signup", authController.signup_GET);
router.post("/signup", authController.signup_POST);
router.get("/login", authController.login_GET);
router.post("/login", authController.login_POST);
router.get("/logout", authController.logout_GET);
router.get("/checkUser", authController.check_user_GET);

// router.get("/users/:_id")

module.exports = router;

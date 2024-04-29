const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.put("/users/:_id/posts", userController.createPost_POST);
router.get("/users/:_id/posts", userController.getPosts_GET);
router.get("/users", userController.users_GET);

module.exports = router;

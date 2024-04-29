const User = require("../models/User");

const createPost_POST = async (req, res) => {
  const _id = req.params._id;
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.posts.push({ content });
    await user.save();
    res.json(user.posts);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal server error" });
  }
};

const getPosts_GET = async (req, res) => {
  const userId = req.params._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const users_GET = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(404).json({ message: "Brak użytkowników" });
    }
    res.json(users);
  } catch (err) {
    res.status(404).json({ message: "Błąd Serwera" });
  }
};
module.exports = {
  createPost_POST,
  getPosts_GET,
  users_GET,
};

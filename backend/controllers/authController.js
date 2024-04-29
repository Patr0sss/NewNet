const User = require("../models/User");
const jwt = require("jsonwebtoken");

// handle errors
const handleError = (error) => {
  console.log(error.message, error.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (error.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (error.message === "incorrect password") {
    errors.password = "Incorrect password";
  }

  // duplicate error code
  if (error.code === 11000) {
    errors.email = "Email already exists";
    return errors;
  }

  // validation errors
  if (error.message.includes("user validation failed")) {
    Object.values(error.errors).map(({ properties }) => {
      console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "XDSECRETXD", {
    expiresIn: maxAge,
  });
};

const signup_GET = async (req, res) => {
  res.send("sign up");
};

const signup_POST = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    let errors = { email: "This email is already in use", password: "" };

    res.status(400).json({ errors });
  } else {
    try {
      const user = await User.create({ email, password });
      const token = createToken(user._id);
      res.cookie("jwt", token, { maxAge: maxAge * 1000 });
      res.status(201).json({ user_id: user._id, user_email: user.email });
    } catch (error) {
      const errors = handleError(error);
      res.status(400).json({ errors });
    }
  }
};

const login_POST = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    console.log(user._id);
    res.status(200).json({ _id: user._id });
  } catch (error) {
    const errors = handleError(error);
    // console.log(errors);
    res.status(400).json({ errors });
  }
};

const login_GET = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  res.send({ email });
};

const logout_GET = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send({ message: "logging out ..." });
};

const check_user_GET = (req, res) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    jwt.verify(token, "XDSECRETXD", async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send(err.message);
      } else {
        console.log(decodedToken);
        let user = await User.findById(decodedToken.id);
        console.log(user);
        res.send({ user });
      }
    });
  } else {
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = {
  signup_POST,
  signup_GET,
  login_POST,
  login_GET,
  logout_GET,
  check_user_GET,
};

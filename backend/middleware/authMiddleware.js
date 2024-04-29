const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, "XDSECRETXD", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({ error: "Unauthorizeddd" });
  }
};

module.exports = { requireAuth };

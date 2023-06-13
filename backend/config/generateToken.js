const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "JWTSECRET", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;

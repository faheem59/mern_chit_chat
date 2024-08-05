const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'binmile123', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;

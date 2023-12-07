const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getToken(req, res) {
  const user = await User.findOne({ where: { email: req.body.email } });

  if (!user) return res.json({ msg: "Wrong Credentials" });

  const verifyPassword = await bcrypt.compare(req.body.password, user.password);
  if (!verifyPassword) return res.json({ msg: "Wrong Credentials" });

  const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

  return res.json({
    token, 
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    address: user.address,

  
  });
}

module.exports = {
  getToken,
};

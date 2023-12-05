const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getToken(req, res) {
 console.log(req.body);
  const user = await User.findOne({ where: { email: req.body.email } });
  console.log(user);

  if (!user) return res.json({ msg: "Wrong Credentials" });
  console.log('Punto de depuración 3');

  const verifyPassword = await bcrypt.compare(req.body.password, user.password);
  if (!verifyPassword) return res.json({ msg: "Wrong Credentials" });

  const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

  return res.json({
    token,

  });
}

module.exports = {
  getToken,
};

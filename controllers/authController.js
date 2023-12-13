const {User, Admin} = require("../models");
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

async function getTokenAdmin(req, res) {
  const admin = await Admin.findOne({ where: { email: req.body.email } });
  console.log(req.body.email)

  if (!admin) return res.json({ msg: "Wrong Credentials" });

  const verifyPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!verifyPassword) return res.json({ msg: "Wrong Credentials" });

  const token = jwt.sign({ sub: admin.id }, process.env.JWT_SECRET);

  return res.json({
    token, 
    firstname: admin.firstname,
    lastname: admin.lastname,
    email: admin.email,
    
});
}

module.exports = {
  getToken, getTokenAdmin
};

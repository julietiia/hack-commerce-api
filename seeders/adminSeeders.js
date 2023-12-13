const { Admin } = require("../models");
const bcrypt = require("bcryptjs")


module.exports = async () => {
  const hashedPassword = await bcrypt.hash("1234", 5);
  const admins = [
    {
        firstname: "Administrador1",
        lastname: "Administrador1",
        email: "admintest@apparat.com",
        password: hashedPassword,
      },
    ]
    await Admin.bulkCreate(admins);
    console.log("[Database] Se corrió el seeder de admin.");
}

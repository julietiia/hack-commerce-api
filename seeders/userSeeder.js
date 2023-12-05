const { User } = require("../models");
const bcrypt = require("bcryptjs")


module.exports = async () => {
  const hashedPassword = await bcrypt.hash("1234", 5);
  const users = [

  {
    firstname: "Agustín",
    lastname: "Reolón",
    address: "Av. Agraciada 768",
    email: "areolon@gmail.com",
    password: hashedPassword,
  },
  {
    firstname: "Lucía",
    lastname: "Fernández",
    address: "Mario Casinoni 2245",
    email: "lfernandez@gmail.com",
    password: hashedPassword,
  },
  {
    firstname: "Beatriz",
    lastname: "Amado",
    address: "Joaquín Suárez 2345 ",
    email: "bamado@gmail.com",
    password: hashedPassword,
  },
];


  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};

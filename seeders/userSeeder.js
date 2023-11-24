
const { User } = require("../models");

module.exports = async () => {
  const users = [

  {
    firstname: "Agustín",
    lastname: "Reolón",
    address: "Av. Agraciada 768",
    email: "areolon@gmail.com",
    password: "1234",
  },
  {
    firstname: "Lucía",
    lastname: "Fernández",
    address: "Mario Casinoni 2245",
    email: "lfernandez@gmail.com",
    password: "1234",
  },
  {
    firstname: "Beatriz",
    lastname: "Amado",
    address: "Joaquín Suárez 2345 ",
    email: "bamado@gmail.com",
    password: "1234",
  },
];


  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};

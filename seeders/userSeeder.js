const { User } = require("../models");
const bcrypt = require("bcryptjs")


module.exports = async () => {
  const hashedPassword = await bcrypt.hash("1234", 5);
  const users = [
   
  {
    firstname: "User1",
    lastname: "User1",
    address: "",
    email: "user1@gmail.com",
    password: hashedPassword,
  },
  
];


  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de User.");
};

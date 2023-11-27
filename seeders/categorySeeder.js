const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Sillas",
      description:
        "La silla es un mueble que suele tener un respaldo, generalmente cuenta con dos, cuatro o cinco apoyos y su finalidad es la de servir de asiento a una persona.​",
        code:10
    },
    {
      name: "Sillones",
      description:
        "La silla es un mueble que suele tener un respaldo, generalmente cuenta con dos, cuatro o cinco apoyos y su finalidad es la de servir de asiento a una persona.​",
        code: 20
    },
    {
      name: "Lámparas",
      description:
        "La silla es un mueble que suele tener un respaldo, generalmente cuenta con dos, cuatro o cinco apoyos y su finalidad es la de servir de asiento a una persona.​",
        code: 30
    },
    {
      name: "Mesas",
      description:
        "La silla es un mueble que suele tener un respaldo, generalmente cuenta con dos, cuatro o cinco apoyos y su finalidad es la de servir de asiento a una persona.​",
        code: 40
    },
    {
      name: "Storage y Organización",
      description:
        "La silla es un mueble que suele tener un respaldo, generalmente cuenta con dos, cuatro o cinco apoyos y su finalidad es la de servir de asiento a una persona.​",
        code: 50
    },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categoría.");
};

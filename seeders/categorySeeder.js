const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Chairs",
      description:
        "A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest. They may be made of wood, metal, or synthetic materials, and may be padded or upholstered in various colors and fabrics.​",
      image: "bannerchairs.jpg",
      code: 10,
    },
    {
      name: "Sofas",
      description:
        "A sofa is defined as an upholstered bench or seat featuring arms and a back, allowing people to sit comfortably. This is the most common word used nowadays to describe the comfy piece of furniture we all relax on in the living room.​",
      image: "bannersofas.jpg",
        code: 20,
    },
    {
      name: "Lighting",
      description:
        "Lighting or illumination is the deliberate use of light to achieve practical or aesthetic effects. Lighting includes the use of both artificial light sources like lamps and light fixtures, as well as natural illumination by capturing daylight.​",
        image: "bannerlighting.jpg",
      code: 30,
    },
    {
      name: "Tables",
      description:
        "A table is an item of furniture with a raised flat top and is supported most commonly by 1 to 4 legs (although some can have more). It is used as a surface for working at, eating from or on which to place things.​",
        image: "bannertables.jpg",
        code: 40,
    },
    {
      name: "Storage & Organization",
      description:
        "Storage furniture provides basic physical enclosure to containerize collections and make it possible to contain multiple items within a room or structure. Variations in storage furniture result from an institution's historical continuity, function, organization, and how collections are used.​",
        image: "bannerstorage.jpg",
        code: 50,
    },
    {
      name: "Deco",
      description:
        "Home accessories are furniture items which are easy to replace and easy to move, and include almost any items that are not strictly functionally necessary in a decorated space.​",
        image: "bannerdeco.jpg",
        code: 60,
    },
  ];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Categoría.");
};

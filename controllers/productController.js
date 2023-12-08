const { Product, Category } = require("../models");
const { Op } = require("sequelize");
const formidable = require("formidable");

// CRUD
const index = async (req, res) => {
  const result = await Product.findAll();
  res.json({ products: result });
};

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.

async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/products",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const { name, description, price, stock, details, highlight, category } = fields;
    
    const image1 = files.image1 && files.image1.size > 0 ? files.image1.newFilename : newProduct.image1;
    const image2 = files.image2 && files.image2.size > 0 ? files.image2.newFilename : newProduct.image2;

    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      productDetail: details, 
      highlight,
      categoryId: category,
      image: [image1, image2]
    });

    res.json("Funcionó");
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  console.log(req.params.id)
  const id = req.params.id
  await Product.destroy({ where: { id: req.params.id } });
  res.json("Producto eiminado")
}

async function getByCategory(req, res) {
  const categories = await Category.findAll();
  const categoryId = req.params.id;
  const products = await Product.findAll({
    where: {
      categoryId: req.params.id,
    },
  });
  const selectedCategory = await Category.findByPk(categoryId);
  res.json({ category: selectedCategory, products: products });
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  getByCategory,
};

const { Product, Category } = require("../models");
const { Op } = require("sequelize");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// CRUD
const index = async (req, res) => {
  const result = await Product.findAll();
  res.json({ products: result });
};

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findByPk(req.params.id);
  res.json({ product });
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.

async function store(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    console.log({fields, files})
    const ext1 = path.extname(files.images[0].filepath);
    const newFilename1 = `image1_${Date.now()}${ext1}`;
    const { data, error } = await supabase.storage
      .from("img")
      .upload(newFilename1, fs.createReadStream(files.images[0].filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.images[0].mimetype,
        duplex: "half",
      });
    const ext2 = path.extname(files.images[1].filepath);
    const newFilename2 = `image2_${Date.now()}${ext2}`;
    const { data: data2, error: error2 } = await supabase.storage
      .from("img")
      .upload(newFilename2, fs.createReadStream(files.images[1].filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.images[1].mimetype,
        duplex: "half",
      });

    const { name, description, price, stock, details, highlight, category } = fields;

    const image1 =
      files.images[0] && files.images[0].size > 0 ? files.images[0].newFilename : newProduct.image1;
    const image2 =
      files.images[1] && files.images[1].size > 0 ? files.images[1].newFilename : newProduct.image2;

    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      productDetail: details,
      highlight,
      categoryId: category,
      image: [newFilename1, newFilename2],
    });

    res.end("Funcionó");
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const product = await Product.findByPk(req.params.id);

  res.json({ product });
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/products",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const { name, description, price, stock, details, highlight, category } = fields;
    console.log(files, fields)
    const product = await Product.findByPk(req.params.id);
    product.update({
      name,
      description,
      price,
      stock,
      productDetail: details,
      highlight,
      categoryId: category,
      // image: [image1, image2]
    });
    await product.save();

    res.json({ message: "se edito el producto", product });
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const id = req.params.id;
  await Product.destroy({ where: { id: req.params.id } });
  res.json("Producto eiminado");
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

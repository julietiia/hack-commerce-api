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
  console.log(req.params.id);
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
    // console.log({fields, files})
    const ext = path.extname(files.image1.filepath);
    const newFilename = `image_${Date.now()}${ext}`;
    const { data, error } = await supabase.storage
      .from("img")
      .upload(newFilename, fs.createReadStream(files.image1.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.image1.mimetype,
        duplex: "half",
      });

      // const ext2 = path.extname(files.image2.filepath);
      // const newFilename2 = `image2_${Date.now()}${ext2}`;
      // const { data: data2, error: error2 } = await supabase.storage
      //   .from("img")
      //   .upload(newFilename2, fs.createReadStream(files.image2.filepath), {
      //     cacheControl: "3600",
      //     upsert: false,
      //     contentType: files.image2.mimetype,
      //     duplex: "half",
      //   });

    const { name, description, price, stock, details, highlight, category } = fields;

    // const image1 =
    //   files.image1 && files.image1.size > 0 ? files.image1.newFilename : newProduct.image1;
    // const image2 =
    //   files.image2 && files.image2.size > 0 ? files.image2.newFilename : newProduct.image2;

    const newProduct = await Product.create({
      name,
      description,
      price,
      stock,
      productDetail: details,
      highlight,
      categoryId: category,
      image: [newFilename],
    });
    
    res.end("Funcionó");
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const product = await Product.findByPk(req.params.id, 
    );
    
    res.json( { product });
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
  
       res.json({ message:"se edito el producto", product});
    });
  }
    
  
  


// Remove the specified resource from storage.
async function destroy(req, res) {
  console.log(req.params.id);
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

const {Product, Category} = require ("../models");
const { Op } = require("sequelize");

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
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (!product){
      return res.status(404).json ({ error: "Product not found"});
    }

    const categoryId = product.categoryId;

    const similarProducts = await Product.findAll ({
      where: {
        categoryId: categoryId,
        id: {
          [Op.notIn]: [productId],
        },
      },
      limit: 4,
    });
    res.json ({products: similarProducts})
  } catch (error){
    console.log ("Error fetching simmilar products:", error.message)
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

async function getByCategory(req, res) {
  const categories = await Category.findAll();
  const categoryId = req.params.id;
  const products = await Product.findAll({
    where: {
      categoryId: req.params.id,
    }
  })
  const selectedCategory = await Category.findByPk(categoryId);
  res.json({ category: selectedCategory, products: products })
};


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

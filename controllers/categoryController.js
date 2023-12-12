const {Category, Product} = require ("../models");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  const result = await Category.findAll();
  res.json({ categories: result });
}

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
        const { name, description } = fields;
       

    const newCategory = await Category.create({
      name,
      description,
      image: files.categoryImage.size === 0 ? newCategory.categoryImage : files.categoryImage.newFilename,
      imageIcon: files.categoryImage.size === 0 ? newCategory.categoryImageIcon : files.categoryImageIcon.newFilename,
    });
    
    return res.json( "se creo una nueva categoria" );
  });
}
    //     await Category.create({
    //       name: fields.name,
    //       description: fields.description,
    //       image: files.image.newFilename
    //     });
    
    //     return res.redirect("/admin-category");
    //   });
    // }
    


// Show the form for editing the specified resource.
async function edit(req, res) {
  const category = await Category.findByPk(req.params.id, 
  );
  
  res.json( { category });
}


// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img/products",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const category = await Category.findByPk(req.params.id);
    category.update({
      name: fields.name,
      description: fields.description,
      image: files.image.size === 0 ? category.image : files.image.newFilename,
      // imageIcon: files.imageIcon.size === 0 ? category.imageIcon : files.imageIcon.newFilename,
      
      
    });
    await category.save();

     res.json({ message:"se edito la categoria", category});
  });
}


// Remove the specified resource from storage.
async function destroy(req, res) {
  console.log(req.params)
  // const category = await Category.findByPk(req.params.id);
  const id = req.params.id
  await Category.destroy({ where: { id: req.params.id } });
  console.log("Categoría eliminada:", req.params.id)
  res.json({ message: "Category deleted successfully." });
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};

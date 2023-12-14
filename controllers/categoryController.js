const { Category, Product } = require("../models");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

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
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const ext = path.extname(files.categoryImage.filepath);
    const newFilename = `image_${Date.now()}${ext}`;
    const { data, error } = await supabase.storage
      .from("img")
      .upload(newFilename, fs.createReadStream(files.categoryImage.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.categoryImage.mimetype,
        duplex: "half",
      });
    const ext2 = path.extname(files.categoryImageIcon.filepath);
    const newFilename2 = `image_${Date.now()}${ext}`;
    const { data: data2, error: error2 } = await supabase.storage
      .from("img")
      .upload(newFilename2, fs.createReadStream(files.categoryImageIcon.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.categoryImageIcon.mimetype,
        duplex: "half",
      });

    const { name, description } = fields;
    const image =
      files.categoryImage.size === 0 ? newCategory.categoryImage : files.categoryImage.newFilename;
    const imageIcon =
      files.categoryImageIcon.size === 0
        ? newCategory.categoryImageIcon
        : files.categoryImageIcon.newFilename2;

    const newCategory = await Category.create({
      name,
      description,
      image: newFilename,
      imageIcon: newFilename2,
      //
    });

    res.end("se creo una nueva categoria");
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
  const category = await Category.findByPk(req.params.id);

  res.json({ category });
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    const ext = path.extname(files.categoryImage.filepath);
    const newFilename = `image_${Date.now()}${ext}`;
    const { data, error } = await supabase.storage
      .from("img")
      .upload(newFilename, fs.createReadStream(files.categoryImage.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.categoryImage.mimetype,
        duplex: "half",
      });
    const ext2 = path.extname(files.categoryImageIcon.filepath);
    const newFilename2 = `image_${Date.now()}${ext2}`;
    const { data: data2, error: error2 } = await supabase.storage
      .from("img")
      .upload(newFilename2, fs.createReadStream(files.categoryImageIcon.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.categoryImageIcon.mimetype,
        duplex: "half",
      });

    const { name, description } = fields;
    const image =
      files.categoryImage.size === 0
        ? updateCategory.categoryImage
        : files.categoryImage.newFilename;
    const imageIcon =
      files.categoryImageIcon.size === 0
        ? updateCategory.categoryImageIcon
        : files.categoryImageIcon.newFilename2;

    const updateCategory = await Category.update(
      {
        name,
        description,
        image: newFilename,
        imageIcon: newFilename2,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );

    res.end("se edito la categoria");
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  // const category = await Category.findByPk(req.params.id);
  const id = req.params.id;
  await Category.destroy({ where: { id: req.params.id } });
  console.log("Categoría eliminada:", req.params.id);
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

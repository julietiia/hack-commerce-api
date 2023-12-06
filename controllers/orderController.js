const {Order} = require ("../models/Order")


// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {

}

// Store a newly created resource in storage.
async function store(req, res) {
    const { firstname, lastname, email, password, address, phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);

  await User.create({
    firstname,
    lastname,
    email,
    address,
    phone,
    password: hashedPassword,
  });
  res.json("Se creó un usuario");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

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

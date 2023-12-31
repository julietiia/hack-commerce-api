const { Order } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const result = await Order.findAll();
  res.json({ orders: result });
}

// Display the specified resource.
async function show(req, res) {
  const orders = await Order.findAll({ where: { userId: req.params.id } })
  res.json({orders})
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const products = req.body;

  await Order.create({
    products,
    userId: req.auth.sub,
  });
  res.json("Se ha creado una orden");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const orderToUpdate = await Order.findByPk(req.params.id);
  orderToUpdate.update({
    state: req.body.state,
  });
  await orderToUpdate.save({ fields: ['id', 'state'] });
}

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

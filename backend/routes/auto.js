const express = require("express");
const Auto = require("./../model/auto");
const router = express.Router();

router.get("/listaAutos", async (req, res) => {
  const autos = await Auto.find();
  res.send(autos);
});

router.post("/", async (req, res) => {
  const auto = new Auto({
    marca: req.body.marca,
    modelo: req.body.modelo,
    color: req.body.color,
    precio: req.body.precio,
  });
  const result = await auto.save();
  res.status(201).send(result);
});

router.put("/", async (req, res) => {
  const auto = await Auto.findByIdAndUpdate(
    req.body._id,
    {
      marca: req.body.marca,
      modelo: req.body.modelo,
      color: req.body.color,
      precio: req.body.precio,
    },
    {
      new: true,
    }
  );
  if (!auto) {
    res.status(400).send("Auto no existente");
  }
  res.status(201).send(auto);
});

router.delete("/:_id", async (req, res) => {
  const auto = await Auto.findByIdAndDelete(req.params._id);
  if (!auto) {
    res.status(400).send("Auto no existente");
  }
  res.status(200).send("Auto Eliminado");
});

module.exports = router;

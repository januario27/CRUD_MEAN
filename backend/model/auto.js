const mongoose = require("mongoose");
const esquemaAuto = new mongoose.Schema({
  marca: {
    type: String,
    default: "generico",
  },
  modelo: {
    type :Number,
    required : true
  },
  color: String,
  precio: Number,
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});

const Auto = mongoose.model("auto", esquemaAuto);
module.exports = Auto;
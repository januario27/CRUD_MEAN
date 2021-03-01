
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const auto = require('./routes/auto');

app.use(express.json());
app.use("/api/auto", auto);

const port = process.env.PORT || 3004;

app.listen(port, () => {
    console.log("Ejecutando en el puerto: ", port);
});

mongoose
  .connect("mongodb://localhost/autos", { useNewUrlParser: true, useFindAndModify: false })
  .then((result) => {
    console.log("Connection Success");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });
 


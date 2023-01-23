const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const { Schema } = mongoose;

const customersSchema = new Schema(
  {
    image: String,
    name: String,
    department: String,
    description: String,
  },
  { timestamps: true }
);

const Customers = mongoose.model("customers", customersSchema);

app.get("/customers", (req, res) => {
  Customers.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(505).json({ message: err });
    }
  });
});

app.get("/customers/:id", (req, res) => {
  const { id } = req.params;
  Customers.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.json(doc);
      } else {
        res.status(404);
      }
    } else {
      res.status(500).json({ message: err });
    }
  });
});

app.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  Customers.findByIdAndDelete(id, (err, doc) => {
    if(!err){
      res.status(200)
    } else{
      res.status(500).json({ message: err });
    }
  });
});

app.post("/customers", (req, res) => {
  let customer = new Customers({
    image: req.body.image,
    name: req.body.name,
    department: req.body.department,
    description: req.body.description,
  });
  customer.save();
  res.send({ message: "Customer added" });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/customers`);
    });
  }
});

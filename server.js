const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");

// var XLSX = require("xlsx");

const app = express();

app.use(express.json());



// show databse data
app.get("/name", function (req, res) {
    Product.find({})
      .exec()
      .then(async (user) => {
        if (user.length >= 1) {
          for (let i = 0; i < user.length; i++) {
            console.log(user[i]);
            if (user[i].hasOwnProperty("image")) {
              console.log(user[i].price);
            }
          }
          return res.status(200).json({
            user,
          });
        }
      });
  });
  


app.listen(3000, () => {
    console.log("Node api app is running on port 3000");
  });
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb://akchaudhary197:Ankit123@ac-f7atdfo-shard-00-00.oirkhou.mongodb.net:27017,ac-f7atdfo-shard-00-01.oirkhou.mongodb.net:27017,ac-f7atdfo-shard-00-02.oirkhou.mongodb.net:27017/Node-API?ssl=true&replicaSet=atlas-dk3454-shard-0&authSource=admin&retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("conected to mongooes");
    })
    .catch((error) => {
      console.log(error);
    });
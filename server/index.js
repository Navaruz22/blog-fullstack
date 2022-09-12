const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const routers = require("./routes/routers");

app.use(morgan("combined"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use("/api", routers);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT || 0, () => {
      console.log("Server started on port", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

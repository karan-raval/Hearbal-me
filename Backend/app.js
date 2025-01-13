const express = require("express");
const connection = require("./Config/Server");
const ProductRouter = require("./Routes/productRoute");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", ProductRouter);

app.listen(process.env.port, () => {
  connection();
  console.log(`server running at ${process.env.port}`);
});
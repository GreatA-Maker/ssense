const express = require("express");

//importing cors package

const cors = require("cors");

const productsController = require("./controllers/product.controllers");

const app = express();

app.use(
	cors({
		origin: "http://127.0.0.1:5500",
	})
);

app.use(express.json());

app.use("/products", productsController);

module.exports = app;

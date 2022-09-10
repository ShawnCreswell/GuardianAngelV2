const ProductController = require("../controllers/products.controller");

module.exports = (app) => {
  app.get("/api/products", ProductController.getAllProducts);
  app.post("/api/products", ProductController.createProducts);
  app.get("/api/products/:id", ProductController.getProducts);
  app.put("/api/products/:id", ProductController.updateProducts);
  app.delete("/api/products/:id", ProductController.deleteProducts);
};

// module.exports = app => {
//   app.get("/api/product/", ProductController.findAllProduct);
//   app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
//   app.post("/api/jokes/new", JokeController.createNewJoke);
//   app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
//   app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
// };

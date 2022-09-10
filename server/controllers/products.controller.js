const { response } = require("express");
const { model } = require("mongoose");
const Products  = require("../models/products.model");


module.exports.getAllProducts = (req, res) => {
  Products.find({})
    .then(allDaProducts => res.json({ products: allDaProducts}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getProducts = (request, response) => {
  Products.findOne({_id:request.params.id})
      .then(products => response.json(products))
      .catch(err => response.json(err))
}

module.exports.createProducts = (req, res) => {
  const { title, price, description } = req.body;
  Products.create({
    title,
    price,
    description
  })
  .then(products => res.json(products))
  .catch(err => res.json(err));
}


module.exports.updateProducts = (request, response) => {
  Products.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
      .then(updatedProducts => response.json(updatedProducts))
      .catch(err => response.json(err))
}

module.exports.deleteProducts = (request, response) => {
  Products.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}


// module.exports.findAllJokes = (req, res) => {
//   Joke.find()
//     .then(allDaJokes => res.json({ jokes: allDaJokes}))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleJoke = (req, res) => {
// 	Joke.findOne({ _id: req.params.id })
// 		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewJoke = (req, res) => {
//   Joke.create(req.body)
//     .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingJoke = (req, res) => {
//   Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedJoke => {
//       console.log(updatedJoke)
//       res.json({ joke: updatedJoke })
//     })
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingJoke = (req, res) => {
//   Joke.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
const { response } = require("express");
const { model } = require("mongoose");
const asyncHandler = require('express-async-handler');
const Guard  = require("../models/guard.model");
const generateToken = require("../utils/generateToken");

// const createGuard = async (req, res) => {
//   const {firstName, lastName, email, password, pic} = req.body;
//   res.json({
//     firstName,
//     lastName,
//     email,
//   })
// }



module.exports.createGuard = asyncHandler(async (req, res) => {
  
  const { firstName, lastName, email, password, pic } = req.body;
  
  const guardExist = await Guard.findOne({ email });
  
  if(guardExist) {
    res.status(400)
    throw new Error("Guard Already Exists");
  }
  
  const guard = await Guard.create({
    firstName,
    lastName,
    email,
    password,
    pic
  });
  
  if(guard){
    res.status(201).json({
      _id:guard._id,
      firstName:guard.firstName,
      lastName:guard.lastName,
      email:guard.email,
      isAdmin:guard.isAdmin,
      // password:guard.password,
      pic:guard.pic,
      token: generateToken(guard._id),
      
    });
  } else {
    res.status(400)
    throw new Error("Error Occured!")
  }
});


module.exports.authGuard = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const guard = await Guard.findOne({ email });

  if(guard && (await guard.matchPassword(password))) {
    res.json({
      _id: guard._id,
      firstName: guard.firstName,
      lastName: guard.lastName,
      email: guard.email,
      isAdmin: guard.isAdmin,
      pic: guard.pic,
      token: generateToken(guard._id),
    });
  }else {
    res.status(400)
    throw new Error("Invalid email or password!")
  }


  module.exports.updateGuardProfile = asyncHandler(async (req, res) => {})




});












module.exports.getAllGuard = (req, res) => {
  Guard.find({})
    .then(allDaGuard => res.json({ guard: allDaGuard}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getGuard = (request, response) => {
  Guard.findOne({_id:request.params.id})
      .then(guard => response.json(guard))
      .catch(err => response.json(err))
};


module.exports.updateGuard = (request, response) => {
  Guard.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
  .then(updatedGuard => response.json(updatedGuard))
  .catch(err => response.json(err))
}

module.exports.deleteGuard = (request, response) => {
  Guard.deleteOne({ _id: request.params.id })
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

// module.exports = { createGuard }
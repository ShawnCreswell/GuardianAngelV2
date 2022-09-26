const express = require("express");
// const { createGuard } = require("../controllers/guards.controller");
const GuardController = require("../controllers/guards.controller");
// const router = express.Router();

// router.route("/").post(createGuard)

// module.exports = router;

module.exports = (app) => {
  app.get("/api/guards", GuardController.getAllGuard);
  app.post("/api/guards", GuardController.createGuard);
  app.post("/api/guards/login", GuardController.authGuard);
  app.get("/api/guards/:id", GuardController.getGuard);
  app.put("/api/guards/:id", GuardController.updateGuard);
  app.delete("/api/guards/:id", GuardController.deleteGuard  );
};

// module.exports = app => {
//   app.get("/api/guard/", GuardController.findAllGuard);
//   app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
//   app.post("/api/jokes/new", JokeController.createNewJoke);
//   app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
//   app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
// };

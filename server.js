const express = require("express");
const app = express();
// connectDB();
const cors = require('cors');
require("./server/config/mongoose.config");
const guardRoutes = require("./server/routes/guards.routes");
const { notFound, errorHandler } = require("./server/middlewares/errorMiddleware");
app.use(cors())
// const { v4: uuidv4 } = require('uuid')
// Middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// Port fort in .env
const dontenv = require("dotenv");
dontenv.config();
const PORT = process.env.PORT || 8000;

// Custom Console log color
const colors = require('colors')
colors.enable();



// Routes 
const AllMyGuardRoutes = require("./server/routes/guards.routes");
AllMyGuardRoutes(app);
app.use('/api/guards',AllMyGuardRoutes)

app.use(notFound);
app.use(errorHandler);


const server = app.listen(PORT, () =>
  console.log(colors.rainbow(`The server is all fired up on port: ${server.address().port}`))
);

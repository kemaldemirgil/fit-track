// Modules...................................................
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


// Port......................................................
const PORT = process.env.PORT || 3001
const app = express();


// Server...................................................
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// MongoDB.................................................
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


// Directories...............................................
app.use(require("./routes/home-routes.js"));
app.use(require("./routes/api-routes.js"));


// Listener.................................................
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
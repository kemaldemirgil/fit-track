// Modules...................................................
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Directories...............................................
const routes = require('./routes');


// Port......................................................
const PORT = process.env.PORT || 3001
const app = express();


// Server...................................................
app.use(routes)
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// MongoDB.................................................
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fittrackdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Listener.................................................
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

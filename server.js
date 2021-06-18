const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// const routes = require('./routes');

const apiRoutes = require("./routes/api-routes.js");
const htmlRoutes = require("./routes/home-routes.js")

const PORT = process.env.PORT || 3001

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fittrackdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(htmlRoutes);
app.use(apiRoutes);
// // routes
// app.use(routes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

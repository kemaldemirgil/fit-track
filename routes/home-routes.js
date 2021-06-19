//Imports............................................
const express = require("express");
const path = require("path");
const router = express.Router();

//GET//http://localhost:3001/
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//GET//http://localhost:3001/exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//GET//http://localhost:3001/stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


//Exports............................................
module.exports = router;
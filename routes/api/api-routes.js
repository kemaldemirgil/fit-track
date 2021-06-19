//Imports............................................
const Workout = require("../../models/Workout.js");
const express = require("express");
const router = express.Router();

//GET//http://localhost:3001/api/workouts
router.get("/workouts", (req, res) => {
    Workout.find({})
    .then( workoutData => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});

//GET//http://localhost:3001/api/range
router.get("/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
    .then( workoutData => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});


//POST//http://localhost:3001/api/workouts
router.post("/workouts", (req, res) => {
    Workout.create({})
    .then( workoutData  => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});


//PUT//http://localhost:3001/api/workouts/:id
router.put("/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
    .then( workoutData => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});


//Exports............................................
module.exports = router;
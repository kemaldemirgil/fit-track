const Workout = require("../models/Workout.js");
const express = require("express");
const router = express.Router();


router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then( workoutData => {
        // console.log(workoutData)
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
    .then( workoutData => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});



router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then( workoutData  => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});



router.put("/api/workouts/:id", ({ body, params }, res) => {
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






module.exports = router;
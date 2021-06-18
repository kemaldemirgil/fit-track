const Workout = require("../../models/Workout.js");
const express = require("express");
const router = express.Router();


router.get("/workouts", (req, res) => {
    Workout.find({})
    .then( workoutData => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});


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



router.post("/workouts", (req, res) => {
    Workout.create({})
    .then( workoutData  => {
        res.json(workoutData);
    })
    .catch( err => {
        res.json(err);
    });
});



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






module.exports = router;
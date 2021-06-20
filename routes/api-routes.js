//Imports............................................
const router = require('express').Router();
const Workout = require('../models/Exercise.js');


//GET//http://localhost:3001/api/workouts
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: '$exercises.duration'},
      },
    },
  ])
    .then(workoutData => {
        res.json(workoutData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


//GET//http://localhost:3001/api/range
router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: '$exercises.duration'},
      },
    },
  ])
    .sort({_id: -1})
    .limit(7)
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//POST//http://localhost:3001/api/workouts
router.post('/api/workouts', ({body}, res) => {
  Workout.create(body)
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//PUT//http://localhost:3001/api/workouts/:id
router.put('/api/workouts/:id', ({body, params}, res) => {
  Workout.findByIdAndUpdate(
    {_id: params.id},
    {$push: {exercises: body}},
    {new: true})
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


//Exports............................................
module.exports = router;
//Imports............................................
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//COLLECTION//Workout...............................
const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: { 
                    type: String,
                    trim: true,
                    required: true
                },
                name: { 
                    type: String,
                    trim: true,
                    required: true
                },
                duration: {
                    type: Number,
                    required: true
                },
                distance: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
            }
        ]
    },
    {
        toJSON: { virtuals: true },
    }
);


//HELPER//TotalDuration..............................
WorkoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = 0;
    this.exercises.forEach((element) => {
        totalDuration += element.duration;
    });
    return totalDuration;
});


//Config............................................
const Workout = mongoose.model("Workout", WorkoutSchema);


//Exports............................................
module.exports = Workout;

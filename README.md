
<p align = "center"> <img src="/public/images/logo.PNG"/> </p>
 
<p align = "center">
  <img src="https://img.shields.io/npm/v/npm?color=red&logo=npm"/>
  <img src="https://img.shields.io/node/v/jest"/>
  <img src="https://img.shields.io/github/license/kemaldemirgil/fit-track?color=cyan&label=License&logo=github&logoColor=cyan"/>
  <img src="https://img.shields.io/github/issues/kemaldemirgil/fit-track?color=yellow&label=Issues&logo=github&logoColor=yellow">
  <img src="https://img.shields.io/github/last-commit/kemaldemirgil/fit-track?color=orange&label=Last%20Commit&logo=git&logoColor=orange">
</p>


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://my-fit-track.herokuapp.com/)

<h3 align = "center">Fitness Progress Tracker Application</h3>

## About:
Fit Track allows users to achieve their fitness goals more quickly by keeping track of their workout progress. Users can *view*, *create* and *track* their daily workouts as well as, logging multiple workouts on a given day. Detailed information about the exercise can be specified, and viewing the **total duration** is also possible.

## Usage:
Since this is just a basic tracker with only the functionality to keep track, there are no users on any other authentication which makes the usage pretty simple and easy.
- `Home page` allows adding exercsies to your most `recent workout plan` or to a `new workout plan`
- `Dashboard` allows to view the combined weight of multiple exercises from the past seven workouts, additionally displaying the total duration for each workout.

## Tools & Dependencies:
Tools & Frameworks      
:-------------------------:
Chart.js
Semantic UI
Bootstrap



```js
"dependencies": {
    "express": "^4.16.3",
    "mongoose": "^5.3.16",
    "morgan": "^1.9.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
```

## Images:

View All Employees            | View All Employees            
:-------------------------:   |:-------------------------:   
![](/public/images/stats.PNG) |![](/public/images/workout.PNG) 


## Improvements:
This application is nothing more than just to practice creating a `RESTful API` using `mongoDB` and the **ODM** `mongoose`. The idea of a Fitness Tracker can definitely be made much better with user accounts, many other exercise types and even health stats.
> I definitely enjoyed using **MongoDB** for the first time, even though I had issues with configuring `virtuals` at first, I think it's a normal process of trying new technologies. 

## License:
Copyright © Kemal Demirgil. All rights reserved.
Licensed under the [MIT](https://github.com/kemaldemirgil/fit-track/blob/main/LICENSE) license.

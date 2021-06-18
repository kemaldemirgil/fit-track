// //Imports............................................
const router = require('express').Router();
const userRoutes = require('./api-routes.js');

// //Navigator..........................................
router.use('/', userRoutes);


// //Exports............................................
module.exports = router;
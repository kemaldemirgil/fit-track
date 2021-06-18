//Imports............................................
const router = require('express').Router();
const apiRoutes = require('./api/api-routes');
const homeRoutes = require('./home-routes.js');


//Navigator..........................................
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


//Exports............................................
module.exports = router;

const router = require('express').Router();

const homeRoutes = require('./homeroutes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardroutes.js');
const createcommentroutes = require('./createcommentroutes.js');

router.use('/',homeRoutes);
router.use('/api',apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/createcomment', createcommentroutes);

module.exports =router;
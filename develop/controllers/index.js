const router = require('express').Router();

const homeRoutes = require('./homeroutes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardroutes.js');

router.use('/',homeRoutes);
router.use('/api',apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports =router;
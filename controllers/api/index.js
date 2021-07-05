const router = require('express').Router();

const userRoutes = require('./user-routes');
const createPostRoutes = require('./createPost-routes');


router.use('/user', userRoutes);
router.use('/blog', createPostRoutes);


module.exports = router;

const router = require('express').Router();

const userRoutes = require('./user-routes');
const createPostRoutes = require('./createPost-routes');
const createCommentRoutes = require('./createComment-routes');


router.use('/user', userRoutes);
router.use('/blog', createPostRoutes);
router.use('/comment', createCommentRoutes);

module.exports = router;

const { Comments } = require('../models');

const commentData = [
    {
        text_comment: 'ok,good',
        user_id:1,
        blog_id:1,
    },
];

const seedComments= ()=> Comments.bulkCreate(commentData);

module.exports = seedComments;
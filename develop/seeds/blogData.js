const {Blog}=require('../models');

const blogData = [
    {
       title:'Express Overview',
       content:'Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications.',
       
       user_id:1,
    },
    {
        title:'core features of Express framework',
        content:'Allows to set up middlewares to respond to HTTP Requests;Defines a routing table which is used to perform different actions based on HTTP Method and URL;Allows to dynamically render HTML Pages based on passing arguments to templates.',
        
        user_id:1,
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
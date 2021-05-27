const router = require('express').Router();
const {User, Blog, Comments}= require('../models');

router.get('/', async(req,res)=>{
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,

                }
            ]
        });
        const blogs= blogData.map(oneBlog=>oneBlog.get({plain: true}));
        res.render("homeviewblogs",{blogs});  
    }
    catch(err){
        res.status(500).json(err);
    }
});

//login route
router.get('/login',(req,res)=>{
    //if the user is already logged in, redirect to the homepage
    console.log(req.session.loggedIn)
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    //otherwise, render the 'login' template
    res.render('login');
});

module.exports=router;

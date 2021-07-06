const router = require('express').Router();
const {User, Blog, Comments}= require('../models');
const auth= require('../utils/auth');

router.get('/', auth, async(req,res)=>{
    if ( !req.session.loggedIn) {
        res.redirect('/login');
        return;
    } else {
        res.redirect('/homeviewblogs')
    }
});

//login route
router.get('/login',(req,res)=>{
    console.log('in the login route')
    //if the user is already logged in, redirect to the homepage
    console.log(req.session.loggedIn)
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    //otherwise, render the 'login' template
    res.render('login',{
        loggedIn: req.session.loggedIn,
    });
});

router.get('/signup',(req,res)=>{
    res.render('signup',{
        loggedIn: req.session.loggedIn,
    });
})

router.get('/dashboard', (req,res)=>{
    res.render('createnewblog',{
        loggedIn: req.session.loggedIn,
    });
})

// router.get('/createnewblog', (req,res)=>{
//     res.render('createnewblog');
// })

router.get('/homeviewblogs', async(req,res)=>{
    try {
        const blogData = await Blog.findAll({
            where:{
                user_id: req.session.user_id,
            },
            include: [ {model: Comments}]
        });
        const blogs= blogData.map(oneBlog=>oneBlog.get({plain: true}));
        res.render("homeviewblogs",{blogs,loggedIn: req.session.loggedIn,});  
    }
    catch(err){
        console.log( err)
        res.status(500).json(err);
    }
})


module.exports=router;

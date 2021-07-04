const router = require('express').Router();
const {Blog} = require('../models');
const auth= require('../utils/auth');

router.get('/', auth, async(req,res)=>{
    
    try {
        // console.log('log session'+req.session)
        // const blogData = await Blog.findAll({
        //     // where: {
        //     //     user_id: req.session.user_id,
        //     //   },
        //     include: [
        //         {
        //             model: User,

        //         }
        //     ]
            
        // });
        // const blogs= blogData.map(oneBlog=>oneBlog.get({plain: true}));
        // res.render('dashboard',{blogs});  
        // res.render('dashboard');  
        res.render('createnewblog');  
    }
    catch(err){
        res.redirect('login');
    }
});
module.exports=router;
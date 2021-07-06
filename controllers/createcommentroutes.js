const router = require('express').Router();
const {Blog} = require('../models');
const auth= require('../utils/auth');

router.get('/:blog_id', auth, async(req,res)=>{

    const { blog_id } = req.params
    
    try {
    
        res.render('addComment', {blog_id});  
    }
    catch(err){
        res.redirect('/');
    }
});
module.exports=router;
const router = require('express').Router();
const {Blog} = require('../models');
const auth= require('../utils/auth');

router.get('/', auth, async(req,res)=>{
    
    try {
    
        res.render('addComment');  
    }
    catch(err){
        res.redirect('/');
    }
});
module.exports=router;
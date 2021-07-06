const router = require('express').Router();
const {Blog} = require('../models');
const auth= require('../utils/auth');

router.get('/', auth, async(req,res)=>{
    
    try {
    
        res.render('createnewblog');  
    }
    catch(err){
        res.redirect('login');
    }
});
module.exports=router;
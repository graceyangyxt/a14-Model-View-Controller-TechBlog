const router = require('express').Router();
const {User,Blog,Comments} = require('../../models');
// const withAuth = require('../../utils/auth');


router.post('/',async(req,res)=> {
    
    try{
        const newComment= await Comments.create({
                ...req.body,
                user_id: req.session.user_id
        });
        console.log("this is!!!!"+newComment)   
        res.status(200).json(newComment);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
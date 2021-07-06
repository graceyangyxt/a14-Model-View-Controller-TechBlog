const router = require('express').Router();
const {User,Blog,Comments} = require('../../models');
// const withAuth = require('../../utils/auth');


router.post('/',async(req,res)=> {
    console.log("this is!!!!"+req)
    try{
        const newComment= await Comments.create({
           
                text_comment: req.body.text_comment,
                user_id: req.session.user_id,
                blog_id: req.params.id,
        });
        
        res.status(200).json(newComment);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const {User,Blog,Comments} = require('../../models');
// const withAuth = require('../../utils/auth');


router.post('/',async(req,res)=> {
    
    try{
        
        const newBlog= await Blog.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
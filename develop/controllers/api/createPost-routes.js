const router = require('express').Router();
const {User,Blog,Comments} = require('../../models');


router.post('/create',async(req,res)=> {
    try{
        const newBlog= await Blog.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        res.json(newBlog);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
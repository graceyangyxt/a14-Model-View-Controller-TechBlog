const router = require('express').Router();
const {User,Blog,Comments} = require('../../models');
// const withAuth = require('../../utils/auth');


router.post('/:id',async(req,res)=> {
    
    try{
        const newComment= await Comments.create({
            where:{
                text_comment: req.body.text_comment,
                user_id: req.session.user_id,
                // blog_id: req.params.id,
            }
        });

        res.status(200).json(newComment);
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;
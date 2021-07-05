const router = require('express').Router();
const {User} = require('../../models');

//create new user
router.post('/', async(req,res)=> {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        console.log('dbUserData'+ JSON.stringify(dbUserData))
        // set up 
        req.session.save(()=> {
            req.session.loggedIn= true;
            req.session.username=dbUserData.username;
            req.session.user_id= dbUserData.id;
            res.status(200).json(dbUserData);
        });
    }catch (err){
        console.log('!!!!!!err'+err)
        res.status(500).json(err);
    }
});

router.post('/login', async(req,res)=>{
    console.log('user routes req.body'+ req.body.username)
    try {
        console.log('=================================')
        const dbUserData = await User.findOne({
            where:{
                username: req.body.username,
            }
        });
        console.log("in the /login controller route!!!!!", dbUserData)
        if(!dbUserData){
            res
            .status(400)
            .json({message: 'Incorrect username or password. Please try again!'});
            return;
        }
        const validPassword = await dbUserData.checkPassword(req.body.password);
        console.log("in the /login  validPassword",validPassword)
        if (!validPassword){
            res
            .status(400)
            .json({message:'Incorrect username or password. Please try again!'});
            
            return;
        }
        console.log('===============================')
        req.session.save(()=> {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            
            res
             .status(200)
             .json({user:dbUserData, message:' You are now logged in!'});
        });
    }catch(err){
        console.log('!!!!!!err'+err)
        res.status(500).json(err);
        
    }
});

//logout
router.post('/logout',(req,res)=> {
    console.log('session variable'+ req.session.loggedIn)
    if (req.session.loggedIn){
        req.session.destroy(()=>{
            res.status(204).end();
        });
    } else{
        res.status(404).end();
    }
});

module.exports = router;
const path = require('path');
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3005;

const sess = {
    cookie: {},
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({helpers});

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(routes);

sequelize.sync({ force:false}).then(()=>{
    app.listen(PORT,()=> console.log('Now listening'));
});
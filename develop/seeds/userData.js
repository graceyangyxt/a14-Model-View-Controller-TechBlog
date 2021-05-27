const { User } = require('../models');

const userData = [
    {
        username:'Grace',
        password:'123456',
    },
    {
        username:'May',
        password:'123456',
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
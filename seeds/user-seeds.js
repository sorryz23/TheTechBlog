const { User } = require('../models');

const userData = [{
    username: 'Sam',
    password: 'S123'
},
{username: 'Josh',
password: 'J123'
},
{
    username: 'Bob',
    password: 'B123',
}
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
const Sequelize = require('sequelize');

// module.exports =  new Sequelize('MetFlix', 'postgres', '123', {
//   host: 'localhost',
//   dialect: 'postgres',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

module.exports = new  Sequelize('dashgtf1bdd1c4', 'beghivwpbbvyed', 'd1fa7938af11f91f9a2525f2f7a8e2c6ec463d8fb214d0a1904089979efabc33', {
  host: 'ec2-174-129-27-3.compute-1.amazonaws.com',
  dialect: 'postgres',
  "dialectOptions": {
    "ssl": true
  }
});
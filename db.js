const config = require('./config/config.js');
const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.USER, 
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.MYSQL_PORT || config.port || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,  //maximum number of connection in pool
            min: 0,  //minimum number of connection in pool
            acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
            idle: 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
        },
    }
);

module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
});
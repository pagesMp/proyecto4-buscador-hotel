require('dotenv').config();

module.exports = {

  environment: process.env.NODE_ENV || 'development',
  username: process.env.USER || 'be4de25469702f',
  password: process.env.PASSWORD || '89eb64de',
  database: process.env.DATABASE || 'heroku_874c3bb1527de61',
  host: process.env.HOST || 'eu-cdbr-west-02.cleardb.net',
  port: process.env.MYSQL_PORT || 3306,
  dialect: process.env.DIALECT || 'mysql'

}
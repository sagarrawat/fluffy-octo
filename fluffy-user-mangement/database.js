const Sequelize = require('sequelize');
var connectionPool = {
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

let getConnection=(pool,dbName)=>{
  let username = process.env.DB_USERNAME ;
  let password = process.env.DB_PASSWORD ;
  
const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: pool,
    logging: false
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log('Connected with mysql.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}

module.exports=async(dbName = null)=>{
    dbName = dbName != null ? dbName : process.env.DB_NAME;
    return await getConnection(connectionPool, dbName);
}
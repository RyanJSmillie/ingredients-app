const UserModel = require('./users');
const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const setupDatabase = () => {
  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,
  });

  const User = UserModel(sequelize, Sequelize);

  sequelize.sync({ alter: true });
  return {
    User
  };
};

module.exports = setupDatabase();
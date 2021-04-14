'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usernames: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      mobileno: {
        type: Sequelize.INTEGER
      },
      profilepicture: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      isactive: {
        type: Sequelize.BOOLEAN
      },
      isdeleted: {
        type: Sequelize.BOOLEAN
      },
      createdby: {
        type: Sequelize.STRING
      },
      createddatetime: {
        type: Sequelize.DATE
      },
      lastmodifiedby: {
        type: Sequelize.STRING
      },
      lastmodifieddatetime: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
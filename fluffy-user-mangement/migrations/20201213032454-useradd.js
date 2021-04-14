'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('users', 'mobileno', {
          type: Sequelize.STRING,
          allowNull: false
      })
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('users', 'mobileno', {
          type: Sequelize.INTEGER,
          allowNull: true,
      })
  ])
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Games',
      'vote_count',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Games',
      'vote_count',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      }
    )
  }
};

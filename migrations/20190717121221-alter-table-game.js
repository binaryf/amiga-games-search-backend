'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'Games',
      'vote_count',
      Sequelize.INTEGER
    );
  },

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'Games',
      'vote_count',
    );
  }
};

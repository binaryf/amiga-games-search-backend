'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Games',
        'title',
        {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'year',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'producer',
        {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'size',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'md5',
        {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'vote_count',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: 0,
        }
      )]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Games',
        'title',
        {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'year',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'producer',
        {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'size',
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'md5',
        {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: null,
        }
      ),
      queryInterface.changeColumn(
        'Games',
        'vote_count',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          defaultValue: null,
        }
      )]);
  }
};

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    producer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    md5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vote_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Game.associate = (models) => {
    Game.hasMany(models.Vote, {
      foreignKey: 'gameId',
    });
  };
  return Game;
};
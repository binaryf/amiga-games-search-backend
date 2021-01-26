'use strict';

module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Vote.associate = (models) => {
    Vote.belongsTo(models.Game, {
      foreignKey: 'gameId',
      onDelete: 'CASCADE',
    });
  };
  return Vote;
};
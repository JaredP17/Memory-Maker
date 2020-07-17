module.exports = function (sequelize, DataTypes) {
  const Event = sequelize.define("Event", {
    userId: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 140],
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10, 3000],
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 140],
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // the associate property is to connect two tables together.
  Event.associate = function (models) {
    Event.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
  };
  Event.associate = function (models) {
    Event.belongsTo(models.Category, {
      foreignKey: {
        name: "categoryId",
        allowNull: false,
      },
    });
  };
  Event.associate = function (models) {
    Event.hasMany(models.Images);
  };
  return Event;
};

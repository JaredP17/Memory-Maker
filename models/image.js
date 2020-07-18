module.exports = function (sequelize, DataTypes) {
  const Image = sequelize.define("Image", {
    name: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    url: { type: DataTypes.STRING },
   /*
   caption: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 140],
      },
    },
    altAttribute: {
      type: DataTypes.STRING,
    }, */
  });

  Image.associate = function (models) {
    Image.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Image;
};

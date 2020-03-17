'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      allowNull: false,//required validación del modelo
      type: DataTypes.STRING
    },
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    image_path: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
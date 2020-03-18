'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    fechaEntrega: DataTypes.DATE,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    Order.belongsToMany(models.Product,{
      through:models.OrderProduct // through es 'a través'
    });//MANY TO MANY Relationship
  };
  return Order;
};
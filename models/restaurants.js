'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      restaurants.hasMany(models.dishes, { foreignKey:'id' });
      
    }
  }
  restaurants.init({
    restaurantName: DataTypes.STRING,
    costForTwo: DataTypes.INTEGER,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'restaurants',
  });
  return restaurants;
};
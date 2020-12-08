'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({ 
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      unique:true,
      isEmail: true
    },
    firstname: {
      type: DataTypes.STRING,
      min: {
        args:[2]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      min: {
        args:[2]
      }
    },
    mobileno: {
      type: DataTypes.INTEGER,
      unique:true
    },
    profilePicture:  {
      type: DataTypes.STRING
    },
    nationality:  {
      type: DataTypes.STRING
    },
    age:  {
      type: DataTypes.INTEGER,
      min: 13,
      max: 100
    },
    isActive: {
       type: DataTypes.BOOLEAN,
       defaultValue: true
    },
    isDeleted:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
   },
    createdBy:  {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: new Date()
    },
    createdDateTime:  {
      type: DataTypes.DATE,
      allowNull:false,
      defaultValue: new Date()
    },
    lastModifiedBy: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: new Date()
    },
    lastModifiedDateTime: {
      type: DataTypes.DATE,
      allowNull:false,
      defaultValue: new Date()
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    username: {
     type: DataTypes.STRING
      },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      unique: true
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    mobileno: {
      type: DataTypes.INTEGER
    },
    profilepicture: {
      type: DataTypes.STRING,
    },
    nationality: {
      type:DataTypes.STRING,
    },
    age: {
      type:DataTypes.INTEGER
    },
    isactive: {
      type:DataTypes.BOOLEAN,
      defaultValue: true
    },
    isdeleted: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdby: {
      type:DataTypes.STRING
    },
    createddatetime: {
      type:DataTypes.DATE,
      defaultValue: new Date()
    },
    lastmodifiedby: {
      type:DataTypes.STRING
    },
    lastmodifieddatetime: {
      type:DataTypes.DATE,
      defaultValue: new Date()
    }
  },
  
  {
    sequelize,
    modelName: 'users',
  });
  return users;
};
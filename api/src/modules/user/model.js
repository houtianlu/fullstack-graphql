'use strict'
import params from '../../config/params'


// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    id : {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT,
    },
    authBy: {
      type: DataTypes.TEXT
    }
  })

  return User
}

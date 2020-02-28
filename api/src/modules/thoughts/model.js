'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let Thought = sequelize.define('thoughts', {
    name: {
      type: DataTypes.STRING
    },
    thought: {
      type: DataTypes.TEXT
    }
  })

  return Thought
}

// Imports
import Sequelize from 'sequelize'

// App Imports
import databaseConnection from './databaseConnection'

const models = {
  Thought: databaseConnection.import('../modules/thoughts/model'),
  User: databaseConnection.import('../modules/user/model')
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models

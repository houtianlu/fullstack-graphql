// App Imports
import models from '../../setup/models'

// Get case by ID
export async function getById(parentValue, { id }) {
  return await models.Thought.findOne({ where: { id } })
}

// Get all case
export async function getAll() {
  return await models.Thought.findAll({ order: [ ['createdAt', 'DESC'] ] })
}

// Create case
export async function create(parentValue, { type }) {
  console.log(type)
  return await models.Thought.create({ type })
}

// Delete case
export async function remove(parentValue, {id}) {
  return await models.Thought.destroy({ where: { id } })
}

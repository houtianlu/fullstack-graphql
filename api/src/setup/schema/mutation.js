// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as thought from '../../modules/thoughts/fields/mutations'
import * as user from '../../modules/user/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...thought,
    ...user
  }
})

export default mutation

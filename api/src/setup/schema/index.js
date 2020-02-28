// Imports
import {GraphQLSchema} from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutation'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema

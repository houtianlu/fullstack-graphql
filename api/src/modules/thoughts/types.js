// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Thought type
const ThoughtType = new GraphQLObjectType({
  name: 'thought',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    type: {type: GraphQLString},
    status: {type: GraphQLString},
    referral_last_name: {type: GraphQLString},
    referral_first_name: {type: GraphQLString},
    referral_phone: {type: GraphQLString}
  })
})

export default ThoughtType

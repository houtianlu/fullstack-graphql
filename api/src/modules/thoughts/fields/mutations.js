// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import ThoughtType from '../types'
import {create, remove} from '../resolvers'

// Thought create
export const thoughtCreate = {
  type: ThoughtType,
  args: {
    type: {
      name: 'type',
      type: GraphQLString
    }
  },
  resolve: create
}

// Thought remove
export const thoughtRemove = {
  type: ThoughtType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import CaseType from '../types'
import {create, remove} from '../resolvers'

// Case create
export const caseCreate = {
  type: CaseType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    content: {
      name: 'content',
      type: GraphQLString
    }
  },
  resolve: create
}

// Case update
export const caseUpdate = {
  type: CaseType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    content: {
      name: 'content',
      type: GraphQLString
    }
  },
  resolve: create
}


// case remove
export const caseRemove = {
  type: CaseType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

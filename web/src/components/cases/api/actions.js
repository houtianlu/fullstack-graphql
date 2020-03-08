// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import {routesApi} from '../../../setup/routes'

// Actions Types
export const CASES_GET_LIST_REQUEST = 'CASES/GET_LIST_REQUEST'
export const CASES_GET_LIST_RESPONSE = 'CASES/GET_LIST_RESPONSE'
export const CASES_GET_LIST_FAILURE = 'CASES/GET_LIST_FAILURE'
export const CASES_GET_REQUEST = 'CASES/GET_REQUEST'
export const CASES_GET_RESPONSE = 'CASES/GET_RESPONSE'
export const CASES_GET_FAILURE = 'CASES/GET_FAILURE'

// Actions

// Get list of cases
export function getList(isLoading = true) {
  return dispatch => {
    dispatch({
      type: CASES_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'thoughts',
      fields: ['id', 'name', 'thought']
    }))
      .then((response) => {
        dispatch({
          type: CASES_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.thoughts
        })
      })
      .catch((error) => {
        dispatch({
          type: CASES_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}

// Get single thought
export function get(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: CASES_GET_REQUEST,
      isLoading
    })

    return axios.post(routesApi, query({
      operation: 'thought',
      variables: {id: parseInt(id, 10)},
      fields: ['id', 'name', 'thought']
    }))
      .then((response) => {
        dispatch({
          type: CASES_GET_RESPONSE,
          error: null,
          item: response.data.data.thought
        })
      })
      .catch((error) => {
        dispatch({
          type: CASES_GET_FAILURE,
          error: error
        })
      })
  }
}

// Create case
export function create(variables) {
  return axios.post(routesApi, mutation({
    operation: 'thoughtCreate',
    variables, fields: ['id']
  }))
}

// Remove case
export function remove(variables) {
  return axios.post(routesApi, mutation({
    operation: 'thoughtRemove',
    variables,
    fields: ['id']
  }))
}

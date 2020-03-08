// Imports

// App Imports
import {
  CASES_GET_LIST_REQUEST,
  CASES_GET_LIST_RESPONSE,
  CASES_GET_LIST_FAILURE,
  CASES_GET_REQUEST,
  CASES_GET_RESPONSE,
  CASES_GET_FAILURE,
} from './actions'

// Thoughts list

// Initial State
const casesInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const cases = (state = casesInitialState, action) => {
  switch (action.type) {
    case CASES_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case CASES_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case CASES_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}


// Single thought

// Initial State
const caseInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const thought = (state = caseInitialState, action) => {
  switch (action.type) {
    case CASES_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case CASES_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case CASES_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

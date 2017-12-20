import { FETCH_DATA, INITIALIZE, GRAPH_WEEK, GRAPH_MONTH, GRAPH_ALL_TIME} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload }
    case INITIALIZE:
      return { ...state, data: action.payload }
    case GRAPH_WEEK:
      return { ...state, state: { mainGraph: action.payload } }
    case GRAPH_MONTH:
      return { ...state, state: { mainGraph: action.payload } }
    case GRAPH_ALL_TIME:
      return { ...state, state: { mainGraph: action.payload } }
  }

  return state
}

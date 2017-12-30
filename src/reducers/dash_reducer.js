import { FETCH_DATA, INITIALIZE, CHART_WEEK, CHART_MONTH, CHART_ALL_TIME} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload }
    case INITIALIZE:
      return { ...state, data: action.payload }
    case CHART_WEEK:
      return { ...state, state: { mainChart: action.payload } }
    case CHART_MONTH:
      return { ...state, state: { mainChart: action.payload } }
    case CHART_ALL_TIME:
      return { ...state, state: { mainChart: action.payload } }
  }

  return state
}

import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import INITIALIZE from './actions/types'
import { createStore, applyMiddleware } from 'redux'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers, [INITIALIZE])

export default store

import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'

const composed = composeWithDevTools()

const store = createStore(reducer, composed)

export default store

import { combineReducers } from 'redux'
import { AppNavigator } from '../Router'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import Api from './Api'

const navReducer = createNavigationReducer(AppNavigator)

const appReducer = combineReducers({
  Api,
})

export default appReducer

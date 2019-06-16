import { combineReducers } from 'redux'
import { AppNavigator } from '../Router'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import Api from './Api'
import User from './User'

const navReducer = createNavigationReducer(AppNavigator)

const appReducer = combineReducers({
  Api,
  User,
})

export default appReducer

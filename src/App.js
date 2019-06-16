import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import React from 'react'

import Middleware from './Middleware'
import AppWithNavigationState from './Router'
import appReducer from './reducers/index'

import Reactotron from './dev/reactronConfig'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    Reactotron.createEnhancer()
  )
)
sagaMiddleware.run(Middleware)

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

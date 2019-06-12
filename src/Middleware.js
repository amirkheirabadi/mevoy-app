'use strict'

import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import Reactotron from 'reactotron-react-native'
import { NetInfo, AsyncStorage } from 'react-native'
import axios from 'axios'

function* apiRequest(action) {
  const isConnected = yield NetInfo.isConnected.fetch()
  if (!isConnected) {
    yield put(NavigationActions.navigate({ routeName: 'Offline' }))
    return
  }

  Reactotron.log(action)
}

function* Middleware() {
  yield takeLatest('API_REQUEST', apiRequest)
}

export default Middleware

'use strict'

import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import Reactotron from 'reactotron-react-native'
import { NetInfo, AsyncStorage } from 'react-native'
import axios from 'axios'
import MQTT from 'sp-react-native-mqtt'

const client = axios.create({
  baseURL: 'http://192.168.43.7:3333/api',
  timeout: 5000,
})

function* apiRequest(action) {
  try {
    const isConnected = yield NetInfo.isConnected.fetch()
    if (!isConnected) {
      return yield put(NavigationActions.navigate({ routeName: 'Offline' }))
    }

    const response = yield client.request({
      method: action.payload.request.method,
      url: action.payload.request.url,
      data: action.payload.request.data,
    })

    yield put({
      type: action.payload.type + '_SUCCESS',
      payload: response.data,
    })

    // yield put({
    //   type: 'LOADING',
    //   payload: {
    //     loading: false,
    //   },
    // });
  } catch (error) {
    yield put({
      type: action.payload.type + '_FAIL',
      payload: error,
    })
  }
}

function* connectMqtt(action) {
  MQTT.createClient({
    uri: 'mqtt://192.168.1.4:1883',
    clientId: '123456',
    user: '+989159223468',
    pass: '123456',
    auth: true,
  })
    .then(function(client) {
      client.on('closed', function() {
        console.log('mqtt.event.closed')
      })

      client.on('error', function(msg) {
        console.log('mqtt.event.error', msg)
      })

      client.on('message', function(msg) {
        console.log('mqtt.event.message', msg)
      })

      client.on('connect', function() {
        console.log('connected')
        client.subscribe('/data', 0)
        client.publish('/data', 'test', 0, false)
      })

      client.connect()
    })
    .catch(function(err) {
      console.log(err)
    })
}

function* Middleware() {
  yield takeLatest('API_REQUEST', apiRequest)
  yield takeLatest('MQTT_CONNECT', connectMqtt)
}

export default Middleware

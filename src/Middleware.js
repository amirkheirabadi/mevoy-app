'use strict'

import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import Reactotron from 'reactotron-react-native';
import { NetInfo, AsyncStorage } from 'react-native';
import axios from 'axios';


// function* signout(action) {
// 	yield put({
// 		type: 'API_SIGNOUT',
// 	});
// }

function* Middleware() {
	// yield takeLatest('API_CHECKCODE_SUCCESS', checkCodeSuccess);
}

export default Middleware;

// import Toast from 'react-native-root-toast';
import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';

// function dispayMessage(messages, error = true) {
// 	const color = error ? '#e74c3c' : '#2ecc71';
// 	for (const msg of messages) {
// 		Toast.show(msg, {
// 			duration: Toast.durations.SHORT,
// 			position: Toast.positions.BOTTOM,
// 			backgroundColor: color,
// 			shadow: true,
// 			animation: true,
// 			hideOnPress: true,
// 			delay: 0,
// 			textStyle: {
// 				fontFamily: 'IRANSans_Light',
// 				fontSize: 14,
// 			},
// 		});
// 	}
// }

function Api(
	state = {},
	action,
) {
	try {
		// let nextState;

		// Reactotron.log(action);

		// if (action.type.includes('_FAIL')) {
		// 	if (
		// 		action.payload.response !== undefined &&
		// 		action.payload.response.data.messages !== undefined
		// 	) {
		// 		dispayMessage(action.payload.response.data.messages, true);
		// 	} else {
		// 		if (action.type === 'API_LOCATION_FAIL') {
		// 			if (state.locationFailed < 10) {
		// 				return {
		// 					...state,
		// 					locationFailed: ++state.locationFailed,
		// 				};
		// 			} else {
		// 				dispayMessage(['خطا در ارتباط با سرور .'], true);
		// 				return {
		// 					...state,
		// 					locationFailed: 0,
		// 				};
		// 			}
		// 		}
		// 		dispayMessage(['خطا در ارتباط با سرور .'], true);
		// 	}
		// }

		// if (
		// 	action.type.includes('_SUCCESS') &&
		// 	action.type !== 'API_SENDER_LOCATION_SUCCESS'
		// ) {
		// 	dispayMessage(action.payload.messages, false);
		// }

		// switch (action.type) {
		// 	case 'API_CHECKCODE_SUCCESS':
		// 		AsyncStorage.setItem('token', action.payload.data.token);
		// 		return {
		// 			...state,
		// 			token: action.payload.data.token,
		// 		};
		// 		break;

		// 	case 'API_SENDCODE_SUCCESS':
		// 		return {
		// 			...state,
		// 			mobile: action.payload.data.mobile,
		// 		};
		// 		break;

		// 	case 'API_PROFILE_SUCCESS':
		// 		return {
		// 			...state,
		// 			firstName: action.payload.data.first_name,
		// 			lastName: action.payload.data.last_name,
		// 			credit: action.payload.data.credit,
		// 			agency: action.payload.data.agency,
		// 			activeTravel: action.payload.data.travel
		// 				? action.payload.data.travel
		// 				: {
		// 						id: false,
		// 						length: 0,
		// 						time: 0,
		// 						customer: {
		// 							mobile: '',
		// 							fname: '',
		// 							lname: '',
		// 						},
		// 						price: 0,
		// 						price_payable: 0,
		// 						points: [],
		// 				  },
		// 		};
		// 		break;

		// 	case 'API_SENDER_LOCATION_SUCCESS':
		// 		return {
		// 			...state,
		// 			customerCacheType: false,
		// 			inLock: action.payload.data.in_lock,
		// 			hasCredit: action.payload.data.has_credit,
		// 			terminal: action.payload.data.terminal,
		// 			inArea: action.payload.data.in_area,
		// 			distance: action.payload.data.distance,
		// 			queueNumber: action.payload.data.queue_number,
		// 			activeTravel: action.payload.data.travel
		// 				? action.payload.data.travel
		// 				: {
		// 						id: false,
		// 						length: 0,
		// 						time: 0,
		// 						customer: {
		// 							mobile: '',
		// 							fname: '',
		// 							lname: '',
		// 						},
		// 						price: 0,
		// 						price_payable: 0,
		// 						points: [],
		// 				  },
		// 			distance: action.payload.data.distance,
		// 		};
		// 		break;

		// 	case 'START_LOCATION_JAB':
		// 		return {
		// 			...state,
		// 			startBackgroundJob: true,
		// 		};
		// 		break;

		// 	case 'API_SIGNOUT':
		// 		AsyncStorage.removeItem('token');
		// 		return {
		// 			...state,
		// 			customerCacheType: false,
		// 			token: false,
		// 			regId: false,
		// 			firstName: '',
		// 			lastName: '',
		// 			credit: 0,
		// 			agency: { name: '' },

		// 			startBackgroundJob: false,
		// 			inLock: false,
		// 			hasCredit: true,
		// 			terminal: false,
		// 			inArea: false,
		// 			distance: 0,
		// 			queueNumber: 0,

		// 			activeTravel: {
		// 				id: false,
		// 				length: 0,
		// 				time: 0,
		// 				customer: {
		// 					mobile: '',
		// 					fname: '',
		// 					lname: '',
		// 				},
		// 				price: 0,
		// 				price_payable: 0,
		// 				points: [],
		// 			},
		// 		};
		// 		break;

		// 	case 'API_FINISH':
		// 		return {
		// 			...state,
		// 			customerCacheType: true,
		// 			firstName: '',
		// 			lastName: '',
		// 			credit: 0,
		// 			agency: { name: '' },

		// 			startBackgroundJob: false,
		// 			inLock: false,
		// 			hasCredit: false,
		// 			terminal: false,
		// 			inArea: false,
		// 			distance: 0,
		// 			queueNumber: 0,

		// 			activeTravel: {
		// 				id: false,
		// 				length: 0,
		// 				time: 0,
		// 				customer: {
		// 					mobile: '',
		// 					fname: '',
		// 					lname: '',
		// 				},
		// 				price: 0,
		// 				price_payable: 0,
		// 				points: [],
		// 			},
		// 		};
		// 		break;

		// 	case 'LOADING':
		// 		return {
		// 			...state,
		// 			loading: action.payload.loading,
		// 		};
		// 		break;

		// 	case 'SET_INIT_DATA':
		// 		AsyncStorage.setItem('token', action.payload.token);

		// 		return {
		// 			...state,
		// 			token: action.payload.token,
		// 			regId: action.payload.regId,
		// 		};
		// 		break;

		// 	case 'API_SHOW_CASH_TYPE':
		// 		return {
		// 			...state,
		// 			customerCacheType: action.payload.customer_cache,
		// 		};
		// 		break;

		// 	case 'CLEAR_TRAVEL':
		// 		return {
		// 			...state,
		// 			customerCacheType: false,
		// 			activeTravel: {
		// 				id: false,
		// 				length: 0,
		// 				time: 0,
		// 				customer: {
		// 					mobile: '',
		// 					fname: '',
		// 					lname: '',
		// 				},
		// 				price: 0,
		// 				price_payable: 0,
		// 				points: [],
		// 			},
		// 		};
		// 		break;
		// }

		// // Simply return the original `state` if `nextState` is null or undefined.
		return state;
	} catch (error) {
		Reactotron.log(error);
		Reactotron.log(action);
	}
}

export default Api
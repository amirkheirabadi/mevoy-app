// import Toast from 'react-native-root-toast';
import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from 'react-native'

function User(
  state = {
    authFormStep: 'signin',

    token: '',
  },
  action
) {
  try {
    switch (action.type) {
      // case 'AUTH_STEP':
      //   return {
      //     ...state,
      //     authFormStep: action.payload,
      //   }
      //   break

      case 'API_AUTH_SIGNIN_SUCCESS':
        return {
          ...state,
          authFormStep: 'verify',
        }
        break
    }

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
    return state
  } catch (error) {
    Reactotron.log(error)
    Reactotron.log(action)
  }
}

export default User

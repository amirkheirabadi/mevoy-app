// import Toast from 'react-native-root-toast';
import Reactotron from 'reactotron-react-native'
import { AsyncStorage } from 'react-native'

function User(
  state = {
    authFormStep: 'signin',

    mobile: '',
    first_name: '',
    last_name: '',
    email: '',
    token: '',
  },
  action
) {
  try {
    switch (action.type) {
      case 'API_AUTH_SIGNIN_SUCCESS':
        return {
          ...state,
          authFormStep: 'verify',
        }
        break

      case 'API_AUTH_VERIFY_SUCCESS':
        const data = action.payload.data
        AsyncStorage.setItem('token', data.token)

        if (data.status == 'pending') {
          return {
            ...state,
            token: data.token,
            mobile: data.mobile,
            authFormStep: 'complete',
          }
        }

        return {
          ...state,
          token: data.token,
          authFormStep: 'signin',
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          mobile: data.mobile,
        }
        break
    }
    return state
  } catch (error) {
    Reactotron.log(error)
    Reactotron.log(action)
  }
}

export default User

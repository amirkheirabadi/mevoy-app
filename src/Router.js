import { createStackNavigator, createAppContainer } from 'react-navigation'
import { connect } from 'react-redux'

import Home from './screens/Home'
import Signup from './screens/Signup'
import Offline from './screens/Offline'

export const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Offline: {
      screen: Offline,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    initialRouteName: 'Signup',
    headerMode: 'none',
  }
)

const App = createAppContainer(AppNavigator, 'root')

const mapStateToProps = state => ({
  state: state.nav,
})

export default connect(mapStateToProps)(App)

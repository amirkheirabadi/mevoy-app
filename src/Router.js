import { createStackNavigator, createAppContainer } from 'react-navigation'
import { connect } from 'react-redux'

import Home from './screens/Home'
import Signup from './screens/Signup'
import Offline from './screens/Offline'
import Init from './screens/Init'

export const AppNavigator = createStackNavigator(
  {
    Init: {
      screen: Init,
    },
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
    initialRouteName: 'Init',
    headerMode: 'none',
  }
)

const App = createAppContainer(AppNavigator, 'root')

const mapStateToProps = state => ({
  state: state.nav,
})

export default connect(mapStateToProps)(App)

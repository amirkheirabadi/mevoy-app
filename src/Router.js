import { createStackNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';

import Home from './screens/Home';
// import Signin from './screens/Signin';
// import Travel from './screens/Travel';
// import Offline from './screens/Offline';
// import Verification from './screens/Verification';
// import AuthLoading from './screens/AuthLoading';

export const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: Home,
		},
		// Signin: {
		// 	screen: Signin,
		// },
		// Travel: {
		// 	screen: Travel,
		// },
		// Offline: {
		// 	screen: Offline,
		// },
		// Verification: {
		// 	screen: Verification,
		// },
		// AuthLoading: {
		// 	screen: AuthLoading,
		// },
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
	},
);

const App = createAppContainer(AppNavigator, 'root');

const mapStateToProps = state => ({
	state: state.nav,
});

export default connect(mapStateToProps)(App);

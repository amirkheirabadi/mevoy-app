if (__DEV__) {
  import('./src/dev/reactronConfig').then(() =>
    console.log('Reactotron Configured')
  )
}

import { AppRegistry, I18nManager } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

I18nManager.allowRTL(false)

AppRegistry.registerComponent(appName, () => App)

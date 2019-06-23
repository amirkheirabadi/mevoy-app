import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, NetInfo, AsyncStorage } from 'react-native'
import Loading from './Loading'

class Init extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    // NetInfo.addEventListener(
    //   'connectionChange',
    //   this.handleFirstConnectivityChange
    // )
  }

  // handleFirstConnectivityChange = () => {
  //   NetInfo.removeEventListener(
  //     'connectionChange',
  //     this.handleFirstConnectivityChange
  //   )

  //   if (this.props.token) {
  //     this.props.navigation.navigate('Home')
  //   } else {
  //     this.props.navigation.navigate('Signin')
  //   }
  // }

  // checkAccess() {
  //   NetInfo.isConnected.fetch().then(isConnected => {
  //     if (isConnected) {
  //       this.handleFirstConnectivityChange()
  //     }
  //   })
  // }

  render() {
    return (
      <View>
        <Loading />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.User.token,
  }
}

export default connect(mapStateToProps)(Init)

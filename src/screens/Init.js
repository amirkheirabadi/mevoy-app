import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, NetInfo, AsyncStorage } from 'react-native'
import Loading from './Loading'
import MQTT from 'sp-react-native-mqtt'

class Init extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      const mqttUrl = 'mqtt://192.168.43.7:1883'
      MQTT.createClient({
        uri: mqttUrl,
        clientId: token,
        user: 'test',
        pass: 'test',
        auth: true,
      })
        .then(client => {
          client.on('closed', () => {
            this.props.navigation.navigate('Offline')
          })

          client.on('error', msg => {
            this.props.navigation.navigate('Offline')
          })

          client.on('message', msg => {
            console.log('mqtt.event.message', msg)
          })

          client.on('connect', () => {
            client.subscribe('/data', 0)
            client.publish('/data', 'test', 0, false)
            this.props.navigation.navigate('Home')
          })

          client.connect()
        })
        .catch(function(err) {
          console.log(err)
        })
    } else {
      this.props.navigation.navigate('Signup')
    }
  }

  render() {
    return (
      <View>
        <Loading />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Init)

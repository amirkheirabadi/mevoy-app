import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, NetInfo, AsyncStorage } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import getTheme from '../../native-base-theme/components'
import commonColor from '../../native-base-theme/variables/commonColor'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  StyleProvider,
  Icon,
  Label,
  Picker,
} from 'native-base'
import Styles from '../Styles'

class Offline extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    NetInfo.addEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    )
  }

  handleFirstConnectivityChange = () => {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    )

    if (this.props.token) {
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('Signin')
    }
  }

  checkAccess() {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        this.handleFirstConnectivityChange()
      }
    })
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Container>
          <Content contentContainerStyle={Styles.container}>
            <View style={Styles.offlineWrapper}>
              <Icon
                name="wifi"
                style={[Styles.offlineWifiIcon]}
                type={'FontAwesome'}
              />
              <Text style={[Styles.sansMedium, Styles.offlineText]}>
                عدم اتصال به اینترنت ...
              </Text>

              <Button
                success
                block
                style={Styles.offlineCheckButtom}
                onPress={this.checkAccess.bind(this)}
              >
                <Text
                  style={[
                    Styles.sansLight,
                    {
                      color: '#fff',
                    },
                  ]}
                >
                  بررسی مجدد !
                </Text>
              </Button>
            </View>
          </Content>
        </Container>
      </StyleProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.User.token,
  }
}

export default connect(mapStateToProps)(Offline)

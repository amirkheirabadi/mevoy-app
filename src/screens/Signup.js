import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
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

const countriesCode = require('../dev/countriesCode')

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobile: '',
      country: '+93',
    }
  }

  checkAuth() {
    this.props.dispatch({
      type: 'API_REQUEST',
      payload: {
        type: 'API_AUTH_CHECK',
        request: {
          method: 'post',
          url: '/auth/check',
          data: {
            mobile: this.state.country + this.state.mobile,
          },
        },
      },
    })
  }

  changeCountry(countryValue, countryIndex) {
    this.setState({
      country: countryValue,
    })
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <View style={Styles.container}>
          <View style={[Styles.wrapper, Styles.authTitleWrapper]}>
            <Text style={Styles.authTitle}>
              Please enter your phone number to
            </Text>
            <Text style={Styles.authTitle}>signin</Text>
          </View>
          <Row
            style={[
              Styles.wrapper,
              {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
            ]}
          >
            <Col size={2}>
              <Item>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  selectedValue={this.state.country}
                  onValueChange={this.changeCountry.bind(this)}
                >
                  {countriesCode.map(item => {
                    return (
                      <Picker.Item
                        key={item.dial_code}
                        label={item.name + ' ' + item.dial_code}
                        value={item.dial_code}
                      />
                    )
                  })}
                </Picker>
              </Item>
            </Col>

            <Col
              size={4}
              style={{
                paddingLeft: 15,
              }}
            >
              <Item>
                <Input
                  placeholder="mobile"
                  onChangeText={mobile => this.setState({ mobile })}
                />
              </Item>
            </Col>
          </Row>
          <Button
            style={Styles.submitButton}
            full
            onPress={this.checkAuth.bind(this)}
          >
            <Text style={Styles.submitButtonText}>Signin</Text>
          </Button>
        </View>
      </StyleProvider>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Signup)

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

      code: '',

      first_name: '',
      last_name: '',
      email: '',
    }
  }

  signin() {
    this.props.dispatch({
      type: 'API_REQUEST',
      payload: {
        type: 'API_AUTH_SIGNIN',
        request: {
          method: 'POST',
          url: '/auth',
          data: {
            mobile: this.state.country + this.state.mobile,
          },
        },
      },
    })
  }

  verify() {
    this.props.dispatch({
      type: 'API_REQUEST',
      payload: {
        type: 'API_AUTH_VERIFY',
        request: {
          method: 'POST',
          url: '/auth/verify',
          data: {
            mobile: this.state.country + this.state.mobile,
            code: this.state.code,
          },
        },
      },
    })
  }

  complete() {
    this.props.dispatch({
      type: 'API_REQUEST',
      payload: {
        type: 'API_AUTH_COMPLETE',
        request: {
          method: 'POST',
          url: '/auth/complete',
          data: {
            mobile: this.state.mobile,
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
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

  renderForm() {
    switch (this.props.authFormStep) {
      case 'signin':
        return (
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
                    keyboardType={'number-pad'}
                    onChangeText={mobile => this.setState({ mobile })}
                  />
                </Item>
              </Col>
            </Row>
            <Button
              style={Styles.submitButton}
              full
              onPress={this.signin.bind(this)}
            >
              <Text style={Styles.submitButtonText}>Signin</Text>
            </Button>
          </View>
        )
        break

      case 'verify':
        return (
          <View style={Styles.container}>
            <View style={[Styles.wrapper, Styles.authTitleWrapper]}>
              <Text style={Styles.authTitle}>verify</Text>
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
              <Col
                size={4}
                style={{
                  paddingLeft: 15,
                }}
              >
                <Item>
                  <Input
                    placeholder="code"
                    keyboardType={'number-pad'}
                    onChangeText={code => this.setState({ code })}
                  />
                </Item>
              </Col>
            </Row>
            <Button
              style={Styles.submitButton}
              full
              onPress={this.verify.bind(this)}
            >
              <Text style={Styles.submitButtonText}>Verify</Text>
            </Button>
          </View>
        )
        break

      case 'complete':
        return (
          <View style={Styles.container}>
            <View style={[Styles.wrapper, Styles.authTitleWrapper]}>
              <Text style={Styles.authTitle}>Complete infrmation</Text>
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
              <Col
                size={4}
                style={{
                  paddingLeft: 15,
                }}
              >
                <Item>
                  <Input
                    placeholder="code"
                    onChangeText={first_name => this.setState({ first_name })}
                  />
                </Item>

                <Item>
                  <Input
                    placeholder="code"
                    onChangeText={last_name => this.setState({ last_name })}
                  />
                </Item>

                <Item>
                  <Input
                    placeholder="code"
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
              </Col>
            </Row>
            <Button
              style={Styles.submitButton}
              full
              onPress={this.complete.bind(this)}
            >
              <Text style={Styles.submitButtonText}>Verify</Text>
            </Button>
          </View>
        )
        break
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        {this.renderForm()}
      </StyleProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    authFormStep: state.User.authFormStep,
  }
}

export default connect(mapStateToProps)(Signup)

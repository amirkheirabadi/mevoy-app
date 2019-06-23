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
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader'

export default class Loading extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={Styles.loadingWrapper}>
        <Bubbles
          size={10}
          color="#e74c3c"
          style={{
            alignSelf: 'center',
          }}
        />

        <Text>Loading ...</Text>
      </View>
    )
  }
}

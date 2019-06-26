import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, NetInfo, AsyncStorage } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import getTheme from '../../native-base-theme/components'
import commonColor from '../../native-base-theme/variables/commonColor'

import Styles from '../Styles'

const Spinner = require('react-native-spinkit')

export default class Loading extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={Styles.loadingWrapper}>
        <Spinner size={25} type={'Bounce'} color={'#fff'} />

        <Text
          style={{
            color: '#fff',
            marginTop: 20,
            fontSize: 16,
          }}
        >
          LOADING ...
        </Text>
      </View>
    )
  }
}

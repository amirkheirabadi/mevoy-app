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

class Offline extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <View style={Styles.container} />
      </StyleProvider>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Offline)

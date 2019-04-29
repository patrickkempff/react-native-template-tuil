/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/patrickkempff/react-native-template-tuil
 *
 * @format
 */

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 250,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
})

interface Props {
  text: string;
}

export default class Example extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

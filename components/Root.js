import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>

      <StatusBar barStyle='light-content' />
      <TextInput style={styles.searchBox} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800',
  }
});
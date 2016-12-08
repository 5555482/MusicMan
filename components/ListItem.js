import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';

const placeholder = require('../assets/placeholder.jpg');

const ListItem = ({ text, imageUrl }) => {
  const image = (
    imageUrl ? { uri: imageUrl } : placeholder
  );
  return (
    <TouchableOpacity underlayColor={ 'gray' }>
      <View style={ styles.mediaObject }>
        <Image source={ image } style={ styles.image } />
        <Text style={ styles.text }> { text }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    flex: 1,
  },
  image: {
    backgroundColor: 'gray',
    width: 40,
    height: 40,
    marginRight: 16,
  }
});
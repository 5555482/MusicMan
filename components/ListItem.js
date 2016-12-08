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

import FadeInView from './FadeInView'

const ListItem = ({index, text, imageUrl, navState , navigator}) => {
  const image = (
    imageUrl ? {uri: imageUrl} : placeholder
  );

return (
  <TouchableOpacity
    underlayColor={'gray'}
    onPress={()=> navigator.push(navState)}
  >
    <FadeInView delay= {index * 25}>
      <View style={styles.mediaObject}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.text}> {text} </Text>
      </View>
    </FadeInView>
  </TouchableOpacity>
);
};

const styles = StyleSheet.create({
  mediaObject:{
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
    marginBottom: 10,
    marginLeft:16,
  },
  text: {
    flex: 1,
  },
  image: {
    backgroundColor: 'gray',
    width: 40,
    height: 40,
    marginRight: 16,
    paddingLeft: 10,
  },
});

export default ListItem;

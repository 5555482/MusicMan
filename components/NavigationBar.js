import React, {Component} from 'react';
import {StyleSheet, Navigator, Text, TouchableOpacity,} from 'react-native';

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator) => {
    if(route.id === 'MAIN'){
      return null;
    }
    return(
      <TouchableOpacity
        onPress= { ()=> navigator.pop() }
        style= {styles.navBarLeftButton }
      >
        <Text
          style= {[styles.navBarText,
          styles.navBarButtonText]}
        >
         Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton: () => {
      return null;
  },
  Title: (route) => {
    return(
      <Text style= {[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#B0C4DE',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: 'white',
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
});

export default (
  <Navigator.NavigationBar
    style={ styles.navBar }
    routeMapper={ NavigationBarRouteMapper }
  />
);
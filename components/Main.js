import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  ListView,
} from 'react-native';
import {debounce} from 'lodash';
import ListItem from './ListItem';
import {searchFor} from '../utils/fetcher';

export default class Main extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const data = ['Spectacles', 'Giraffe', 'Turtle', 'Shark', 'Lamp', 'Salt', 'Beef', 'Drawer', 'Brocolli', 'Rasberries', 'Plate', 'Zebra'];
    this.state = { artists: dataSource };
  }

  renderRow = (artist, sId, id) => {
    const imageUrl = artist.image[0] ? artist.images[0].url : null;
    
    return (
      <ListItem index= { id }
        text = { artist.name }
        image={ null } />
    );
  };

  render() {
    const { artists } = this.state;

    return (
      <View style={ styles.container }>
        <StatusBar barStyle='light-content' />
        <TextInput style={ styles.searchBox} onChangeText= { this.makeQuery } />
        <ListView dataSource={ artists }
          style={ styles.listView }
          renderRow={ this.renderRow } />
      </View>
    );
  }

makeQuery = debounce(query => {
  searchFor(query)
    .then(artists => {
        this.setState({
          artists: this.state.artists.cloneWithRows(artists),
        });
    })
    .catch((error) => {
      throw error;
    });
}, 400);
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
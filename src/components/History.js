import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import ListItem from './ListItem';

class History extends Component {
  state = { gifts: [] };

  componentWillMount() {
    axios.get('https://gift-it-rails.herokuapp.com/users/1/gifts')
      .then(response => { this.setState({ gifts: response.data }) })
      .catch(error => console.log(error));
  }

  renderGifts() {
    return this.state.gifts.map(gift =>
      <ListItem key={gift.id} gift={gift} />
    );
  }

  render() {
    console.log(this.state.gifts)
    return (
      <View>
        {this.renderGifts()}
      </View>
    );
  }
}

export default History;

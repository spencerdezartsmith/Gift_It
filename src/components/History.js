import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import ListItem from './ListItem';

class History extends Component {
  state = { gifts: [] };

  componentWillMount() {
    axios.get('http://localhost:3000/users/1/gifts')
    .then(response => this.setState({ gifts: response.data }));
  }

  renderGifts() {
    return this.state.gifts.map(gift =>
      <ListItem key={gift.id} gift={gift} />
    );
  }

  render() {
    return (
      <View>
        {this.renderGifts()}
      </View>
    );
  }
}

export default History;

import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Container } from './common';


class Graph extends Component {
  componentWillMount() {
    axios.get('http://localhost:3000/totals')
      .then(response => console.log(response.data)); // this is the array
  }

  render() {
    return (
      <View>
        <Container>
          <Text>
            Graph Land!!!
          </Text>
        </Container>
      </View>
    );
  }
}

export default Graph;

import React, { Component } from 'react';
import axios from 'axios';
import { View, ART, Dimensions, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import { Container } from './common';
import { scaleBand, scaleLinear } from 'd3-scale';
import { max, ticks } from 'd3-array';
import { line } from 'd3-shape';
import { path } from 'd3-path';
import Svg, {
  G,
  Line,
  Path,
  Rect,
  Text
} from 'react-native-svg'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 10
  },
  cardStyle: {
    shadowColor: '#000000',
    borderColor: 'white'
  },
  imageStyle: {
    flex: 1,
    width: 350,
    height: 300,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Graph;

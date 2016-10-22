import React, { Component } from 'react';
import { View } from 'react-native';
import Router from './Router';
import { TabBar } from './components/common';

class GiftIt extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router />
        <TabBar />
      </View>
    );
  }
}

export default GiftIt;

import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { Container, CardSection, Confirm } from './common';
import timer from 'react-native-timer';

class Root extends Component {

  state = { showModal: false };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ showModal: true });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  showConfirm() {
    if (this.state.showModal === true) {
      return <Confirm />;
    }
  }

  render() {
    return (
     <View style={styles.container}>
      <Container>
       <Image
       style={{ marginTop: -40 }}
       source={require('../Resources/GiftIt_Logo_Green.png')}
       resizeMode='contain'
       />
       <Image
       style={styles.imageStyle}
       source={require('../Resources/gift-it-blue.gif')}
       resizeMode='contain'
       />

      {this.showConfirm()}

     </Container>
     </View>
     );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 50
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
  }
};

export default Root;

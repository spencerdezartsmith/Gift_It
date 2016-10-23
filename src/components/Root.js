import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, CardSection, Confirm } from './common';

class Root extends Component {

  state = { showModal: true };

  render() {
    return (
     <View style={styles.container}>
      <Container>
       <Image
       style={{ marginTop: -10 }}
       source={require('../Resources/GiftIt_Logo_Green.png')}
       resizeMode='contain'
       />
       <Image
       style={styles.imageStyle}
       source={require('../Resources/gift-it-blue.gif')}
       resizeMode='contain'
       />

       <Confirm 
       visible={ this.state.showModal }>
        <View style={styles.container}>
          
        </View>
      </Confirm>
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

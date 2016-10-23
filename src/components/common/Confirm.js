import React, { Component } from 'react';
import { Text, Modal, View, Image } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { CardSection } from './CardSection';
import { Input } from './Input';
import { Button } from './Button';

const radioProp1 = [
  { label: 'Packers', value: 0 }
];

const radioProp2 = [
	{ label: '49ers', value: 0 }
];

class Confirm extends Component {
  state = {
    donationAmount: '',
    modalVisible: true,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    console.log(this.state.donationAmount);
    return (
      <Modal
        visible={this.state.modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => {}}
      >
        <View style={styles.containerStyle}>
          <CardSection style={styles.cardSectionStyle}>
            <Image
              style={styles.imageStyle}
              source={require('../../Resources/GiftIt_Logo_Green.png')}
              resizeMode='contain'
            />
          </CardSection>

          <CardSection style={styles.cardSectionStyle}>
            <Text style={styles.labelStyle}>$</Text>
              <Input
                style={styles.inputStyle}
                placeholder={'Enter a Donation Amount'}
                value={this.state.donationAmount}
                onChangeText={text => this.setState({ donationAmount: text })}
              />
          </CardSection>

          <CardSection>
            <RadioForm
              radio_props={radioProp1}
              style={styles.radioStyle}
              initial={0}
              formHorizontal={true}
              buttonColor={'#8EFAB4'}
              onPress={(value) => { this.setState({ value: value }); }}
            />
            <RadioForm
              radio_props={radioProp2}
              style={styles.radioStyle}
              initial={1}
              formHorizontal={true}
              buttonColor={'#8EFAB4'}
              onPress={(value) => { this.setState({ value: value }); }}
            />
          </CardSection>

          <CardSection>
            <Button>
              Donate
            </Button>
          </CardSection>
        </View>
      </Modal>

);
}
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center',
	},
	textStyle: {
		flex: 1,
		fontSize: 24,
		textAlign: 'center',
		lineHeight: 50
	},
	inputStyle: {
		textAlign: 'center',
		justifyContent: 'center',
		height: 40,
		flex: 3,
		lineHeight: 10,
		backgroundColor: '#8EFAB4',
		marginTop: 10,
		marginBottom: 10
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	imageStyle: {
		marginTop: 50,
		marginBottom: 20,
		flex: 1,
		height: 100
	},
	labelStyle: {
		fontSize: 20,
		textAlign: 'center',
		lineHeight: 40
	},
	radioStyle: {
		marginLeft: 70,
		marginTop: 10,
		marginBottom: 10
	}
};

export { Confirm };

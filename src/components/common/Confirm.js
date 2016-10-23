import React, { Component } from 'react';
import { Text, Modal, View, Image, Alert } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
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

const alertMessage = 'Thank you for your donation. May the best team win!!'

class Confirm extends Component {
  state = {
    donationAmount: '',
    modalVisible: true,
    user: '',
  }

  onButtonPressed() {
    this.callBackToIngenico();
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  callBackToIngenico() {
    const json = {
      "order": {
        "amountOfMoney": {
          "currencyCode": "EUR",
          "amount": 2980
        },
        "customer": {
          "merchantCustomerId": "1234",
          "personalInformation": {
            "name": {
              "title": "Mr.",
              "firstName": JSON.stringify(this.state.user.first_name),
              "surnamePrefix": "E.",
              "surname": "Coyote"
            },
            "gender": "male",
            "dateOfBirth": "19490917"
          },
          "companyInformation": {
            "name": "Acme Labs"
          },
          "locale": "en_GB",
          "billingAddress": {
            "street": "Desertroad",
            "houseNumber": "13",
            "additionalInfo": "b",
            "zip": "84536",
            "city": "Monument Valley",
            "state": "Utah",
            "countryCode": "US"
          },
          "shippingAddress": {
            "name": {
              "title": "Miss",
              "firstName": "Road",
              "surname": "Runner"
            },
            "street": "Desertroad",
            "houseNumber": "1",
            "additionalInfo": "Suite II",
            "zip": "84536",
            "city": "Monument Valley",
            "state": "Utah",
            "countryCode": "US"
          },
          "contactDetails": {
            "emailAddress": "wile.e.coyote@acmelabs.com",
            "phoneNumber": "+1234567890",
            "faxNumber": "+1234567891",
            "emailMessageType": "html"
          },
          "vatNumber": "1234AB5678CD"
        },
        "references": {
          "merchantOrderId": 123456,
          "merchantReference": "AcmeOrder0001",
          "invoiceData": {
            "invoiceNumber": "000000123",
            "invoiceDate": "20140306191500"
          },
          "descriptor": "Fast and Furry-ous"
        },
        "items": [
          {
            "amountOfMoney": {
              "currencyCode": "EUR",
              "amount": 2500
            },
            "invoiceData": {
              "nrOfItems": "1",
              "pricePerItem": 2500,
              "description": "ACME Super Outfit"
            }
          },
          {
            "amountOfMoney": {
              "currencyCode": "EUR",
              "amount": 480
            },
            "invoiceData": {
              "nrOfItems": "12",
              "pricePerItem": 40,
              "description": "Aspirin"
            }
          }
        ]
      },
      "cardPaymentMethodSpecificInput": {
        "paymentProductId": 1,
        "skipAuthentication": false,
        "card": {
          "cvv": "123",
          "cardNumber": "4567350000427977",
          "expiryDate": "1220",
          "cardholderName": "Wile E. Coyote"
        }
      }
};
    axios.post('https://gift-it-ingenico.herokuapp.com/payments/createPayment', json)
      .then(response => console.log(response))
      .then(() => Alert.alert(
        'Success!!',
        alertMessage,
        [{ text: 'OK', onPress: () => this.callBackToApi() }]));
  }

  callBackToApi() {
    axios.post('https://gift-it-rails.herokuapp.com/users/1/gifts', {
      amount: this.state.donationAmount,
      charity: 'Breast Cancer Research Foundation',
      team: 'Packers',
      icon: 'https://bighugelabs.com/img/nbcam/ribbon_3000_bg_sh.png'
    })
    .then(this.setState({ modalVisible: false, donationAmount: '' }))
    .then(response => this.setState({ user: response.data }))
    .then(Actions.home());
  }

  render() {
    return (
      <Modal
        visible={this.state.modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => {}}
      >
        <View style={styles.containerStyle}>
          <View style={{ backgroundColor: 'white', paddingLeft: 70 }}>
            <Image
              style={styles.imageStyle}
              source={require('../../Resources/GiftIt_Logo_Green.png')}
              resizeMode='contain'
            />
          </View>
            <View style={{ backgroundColor: 'white', paddingTop: 15, paddingBottom: 5 }}>
              <Text style={styles.headerStyle}>Welcome to Levi's Stadium!</Text>
              <Text style={styles.textStyle}>
                Make a donation to the Breast Cancer Research Foundation
              </Text>
            </View>


          <CardSection style={styles.cardSectionStyle}>
            <Text style={styles.labelStyle}>$</Text>
              <Input
                // style={styles.inputStyle}
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
            <Button onPress={() => this.onButtonPressed()}>
              Donate
            </Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 10
  },
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 14,
		textAlign: 'center',
	},
	inputStyle: {
		textAlign: 'center',
		justifyContent: 'center',
		height: 40,
		flex: 1,
		lineHeight: 10,
		backgroundColor: '#8EFAB4',
		marginTop: 10,
		marginBottom: 10,
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
		lineHeight: 40,
	},
	radioStyle: {
		marginLeft: 70,
		marginTop: 10,
		marginBottom: 10
	}
};

export { Confirm };

import React from 'react';
import { Text, Modal, View, Image, TextInput } from 'react-native';
import { CardSection } from './CardSection';
import { Input } from './Input';
import { Button } from './Button';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



var radio_prop1 = [
  {label: 'Packers', value: 0 }
];

var radio_prop2 = [
	{label: '49ers', value: 0 }
]

const Confirm = ({ children, visible, onAccept, onDecline, label, placeholder}) => {
	const { containerStyle, labelStyle, textStyle, cardSectionStyle, imageStyle, inputStyle, radioStyle} = styles;


	return(
		<Modal
		visible={visible}
		transparent={true}
		animationType='fade'
		onRequestClose={() => {}}
		> 
		<View style={containerStyle}>
		<CardSection style={cardSectionStyle}>
		<Image
		style={ imageStyle }
		source={require('../../Resources/GiftIt_Logo_Green.png')}
		resizeMode='contain'
		/>
		</CardSection>
		<CardSection style={cardSectionStyle}>
		<Text style={labelStyle}>{"$"}</Text>
		<TextInput
		style={inputStyle}
		placeholder={"Enter a Donation Amount"}
		placeholderTextColor={"grey"}
		></TextInput>
		</CardSection>
		
		<CardSection>
		<RadioForm
          radio_props={radio_prop1}
          style={radioStyle}
          initial={0}
          formHorizontal={true}
          buttonColor={'#8EFAB4'}
          onPress={(value) => {this.setState({value:value})}}
        />
        <RadioForm
          radio_props={radio_prop2}
          style={radioStyle}
          initial={1}
          formHorizontal={true}
          buttonColor={'#8EFAB4'}
          onPress={(value) => {this.setState({value:value})}}
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
};

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
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
}

export { Confirm };
import React from 'react';
import { Text, Image, View } from 'react-native';
import { CardSection, Card } from './common';

const ListItem = (props) => {
  state = {
    image: ''
  }

console.log("#########")
console.log(props.gift.icon)
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: props.gift.icon}}

          />
        </View>

        <View style={styles.dataStyle}>
          <Text>{props.gift.charity}</Text>
          <Text>${props.gift.amount}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  dataStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  thumbnailStyle: {
    height: 40,
    width: 40
  }
};

export default ListItem;

// add in a small thumbnail for breast cancer awareness
// find some other charity to put in the donation
// build out the list animation

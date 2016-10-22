import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 70, // regular css padding to elements on the page
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export { Container };

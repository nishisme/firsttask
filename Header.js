import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
  <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);
const styles = {
  viewStyle: {
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;

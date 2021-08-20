import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: 'purple',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

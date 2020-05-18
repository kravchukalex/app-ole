import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        // {borderTopColor: props.color ? props.color : '#white'},
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    //borderTopWidth: 10,
    borderWidth: 10,
    borderColor: 'white',
  },
});

export default VerticalSeparator;

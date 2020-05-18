import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout(props) {
  return (
    <View style={styles.container}>
      {props.title ? <Text style={styles.title}>{props.title}</Text> : <></>}
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    // paddingVertical: 30,
    paddingHorizontal: 10,
    //  backgroundColor: 'red',
  },
  title: {
    color: '#000000',
    fontSize: 22,
    marginBottom: 18,
    fontWeight: 'bold',
    //marginLeft: 15,
  },
});

export default CategoryListLayout;

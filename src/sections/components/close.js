import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function Close(props) {
  return (
    <View
      //onPress={navigation.navigate('Home')}
      style={styles.container}>
      {/* </TouchableOpacity><TouchableOpacity style={styles.container}> */}
      <Text style={styles.button}>X</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14b739',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {fontWeight: 'bold', color: 'white'},
});

export default Close;

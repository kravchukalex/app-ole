import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Close from './close';

function Header(props) {
  //StatusBar.setBarStyle('light-content');
  //StatusBar.setBackgroundColor('grey');
  return (
    <View>
      <SafeAreaView>
        {/* <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" /> */}
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          {/* <View style={styles.right}>{props.children}</View> */}
          <View style={styles.right}>
            {/* {props.children}
            <Close onPress={this.closeVideo} /> */}
            <Close />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    flexDirection: 'row',
  },
  right: {
    //backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;

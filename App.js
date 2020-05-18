/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
//import {store} from './store';
import Loading from './src/sections/components/loading';
import AppNavigator from './src/app-navigator';
import Home from './src/screens/containers/home';

export default class App extends React.Component {
  render() {
    //console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

{
  /* <Provider store={store}>
<PersistGate loading={<Loading />} persistor={persistor}>
<AppNavigator />
</PersistGate>
</Provider> */
}

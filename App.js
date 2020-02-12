/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Calculator from './src/Calculator.js';


import store from './src/store';
import { Provider } from 'react-redux';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
    
  );
};

const styles = StyleSheet.create({

  
});

export default App;

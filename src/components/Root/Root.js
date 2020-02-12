import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,

} from "react-native";

import {connect} from 'react-redux';


import * as actions from "../../actions";

import { Expression } from "../Expression";
import { Result } from "../Result";
import { Controls } from "../Controls";

import styles from "./styles";

const measureControls = e => {
  const { height } = e.nativeEvent.layout;
  const padding = height * 0.01; // 1% of height
  
};

const measureBox = e => {
  const { height } = e.nativeEvent.layout;
  
};

const Root = ({expression, result, saveExpression, calcResult, clearResult, togglePlusMinus }) => {


        
    
        return (
          <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.content}>
              <Expression content={expression} />
              <Result content={result} />
              <Controls
                saveExpression={saveExpression}
                calcResult={calcResult}
                clearResult={clearResult}
                togglePlusMinus={togglePlusMinus}


                controlsPadding={0}
                boxHeight={0}
              />
            </View>
          </View>
        );

}

export default Root;

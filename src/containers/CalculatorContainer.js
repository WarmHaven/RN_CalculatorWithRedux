import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity

} from "react-native";

import {connect} from 'react-redux';
import {saveExpression, calcResult, clearResult, togglePlusMinus} from '../actions'
import Root from '../components/Root';



const mapStateToProps = state => ({ 

	expression: state.calculator.expression,
  result: state.calculator.result,


});

const mapDispatchToProps = dispatch => ({
  saveExpression: payload => dispatch( saveExpression(payload)),
  calcResult: () => dispatch( calcResult()),
  clearResult: () => dispatch( clearResult()),
  togglePlusMinus: payload => dispatch( togglePlusMinus(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
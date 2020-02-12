import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";


import CalculatorContainer from './containers/CalculatorContainer.js';





class Calculator extends Component {

    render() {

        return (
            <View style={styles.container}>
                <CalculatorContainer />
            </View>
        );
    }
}
export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
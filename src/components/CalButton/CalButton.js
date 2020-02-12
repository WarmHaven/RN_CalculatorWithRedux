import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,

} from "react-native";
import styles from "./styles";





const CalButton = ({content, style, onPress, onLayout}) => {
    



    return(

        <TouchableOpacity style={style} activeOpacity={0.4} onPress={onPress} onLayout={onLayout ? onLayout : null}>
		    <Text style={styles.text}>{content}</Text>
		</TouchableOpacity>


)};



export default CalButton;


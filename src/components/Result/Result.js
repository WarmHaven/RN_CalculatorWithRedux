import React, { Component } from "react";
import {

    Text,


} from "react-native";
import styles from "./styles";





const Result = ({content}) => {
    



    return(

        <Text style={styles.result} numberOfLines={1}>
            {content}
        </Text>


)};



export default Result;


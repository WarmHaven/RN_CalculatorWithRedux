import React, { Component } from "react";
import {

    Text,


} from "react-native";
import styles from "./styles";





const Expression = ({content}) => {
    



    return(

        <Text style={styles.question} numberOfLines={1}>
            {content}
        </Text>


)};



export default Expression;


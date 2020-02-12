import React, { Component } from "react";
import {
    View,
    Text,

} from "react-native";


import { CalButton } from "../CalButton";
import styles from "./styles";




const Controls = props => {

    return(


    <View style={styles.controls} onLayout={props.measureControls}>
        <View style={[styles.pretender, {height: props.boxHeight / 2 + props.controlsPadding}]} />
            
        <View style={styles.row}>
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="C"
                onPress={props.clearResult}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="+/-"
                onPress={props.togglePlusMinus}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="%"
                onPress={() => props.saveExpression("%")}
            />
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="/"
                onPress={() => props.saveExpression("/")}
            />
        </View>

        <View style={styles.row}>
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="7"
                onPress={() => props.saveExpression("7")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="8"
                onPress={() => props.saveExpression("8")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="9"
                onPress={() => props.saveExpression("9")}
            />
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="X"
                onPress={() => props.saveExpression("*")}
            />
        </View>

        <View style={styles.row}>
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="4"
                onPress={() => props.saveExpression("4")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="5"
                onPress={() => props.saveExpression("5")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="6"
                onPress={() => props.saveExpression("6")}
            />
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="一"
                onPress={() => props.saveExpression("-")}
            />
        </View>

        <View style={styles.row}>
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="1"
                onPress={() => props.saveExpression("1")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="2"
                onPress={() => props.saveExpression("2")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="3"
                onPress={() => props.saveExpression("3")}
            />
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="+"
                onPress={() => props.saveExpression("+")}
            />
        </View>
        <View style={styles.row}>
            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.double, styles.darkGary]}
                content="0"
                onPress={() => props.saveExpression("0")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.darkGary]}
                content="."
                onPress={() => props.saveExpression(".")}
            />

            <CalButton
                onLayout={props.measureBox}
                style={[styles.box, styles.orange]}
                content="="
                onPress={props.calcResult}
            />
            
        </View>
        

    </View>
        


)}



export default Controls;

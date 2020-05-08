import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity, View, } from 'react-native'
import Colors from '../Constants/Colors'
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default (props) => {
    return(
        <View style={styles.Container}>

        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        marginTop:getStatusBarHeight()+5,
        height:100,
        backgroundColor: Colors.white,
    }
})
import React, { Component } from 'react';
import { TextInput, StyleSheet,TouchableOpacity, View, Image, } from 'react-native'
import Colors from '../Constants/Colors'

export default (props) => {
    return( 
    <View style={[styles.input, props.style]}>
        <TextInput 
            placeholder={props.placeholder} 
            placeholderTextColor= {Colors.black} 
            maxLength={props.maxLength}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            style={styles.inputBox}
        />
    </View>
)}

const styles = StyleSheet.create({ 
    input: {
        borderWidth: 2,
        height: 50,
        width: 50,
        borderRadius: 100/2,
        margin:5,
    },
    inputBox:{
        height: 50,
        width: 50,
        borderRadius: 100/2,
        marginStart: 12,
        fontSize:22,
    }  
})
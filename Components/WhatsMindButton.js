import React, { Component } from 'react';
import { TextInput, StyleSheet,TouchableOpacity, View, Text, } from 'react-native'
import Colors from '../Constants/Colors'

export default (props) => {
    return( 
    <TouchableOpacity 
        style={[styles.input, props.style]}
        onPress={props.onPress}
    >
        <View style={{position: 'relative'}}>
            <Text style={styles.text}>
                {props.searchText}
            </Text>
        </View>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({ 
    input: {
        height: 40,
        width: 280,
        margin:5,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: Colors.grey,
        backgroundColor:'#fff'
    },
    text:{
        position:'absolute',
        top:-5,
        left:40,
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight: 10
    },
    inputBox:{
        position:'absolute',
        top:15,
        height: 40,
        width: 280,
        marginStart: 12,
        fontSize:22,
        // backgroundColor: Colors.white
    }  
})
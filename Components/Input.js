import React, { Component } from 'react';
import { TextInput, StyleSheet,TouchableOpacity, View, Image, } from 'react-native'
import Colors from '../Constants/Colors'
//import vector icons

export default (props) => {
    return( 
    <View style={[styles.input, props.style]}>
        <Image 
            source={props.source} 
            style={styles.icon}
        />
        <TextInput 
            placeholder={props.placeholder} 
            placeholderTextColor= {Colors.black} 
            style={styles.inputBox}
        />
    </View>
)}

const styles = StyleSheet.create({ 
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: Colors.input,
        backgroundColor: Colors.input,
        opacity: 0.6,
        marginTop:5,
        marginBottom: 5
    },
    icon:{
        height:17,
        width:20,
        padding: 5,
    },
    inputBox:{
        padding: 8,
        width:'75%',
        height: 35,
        marginStart: 10,
        fontSize:16,
        color: Colors.inputColor
    }  
})
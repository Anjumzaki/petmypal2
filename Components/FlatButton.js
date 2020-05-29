import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity, } from 'react-native'
import Colors from '../Constants/Colors'

export default (props) => {
    return(
        <>
            <TouchableOpacity
                style ={[styles.Button, props.style]}
                onPress={props.onPress}
                activeOpacity= {0.5}
            >
                <Text 
                    style={styles.signin}
                >
                    {props.ButtonText} 
                </Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    Button:{
        borderWidth: 2,
        borderColor: Colors.primary,
        width: '80%',
        alignSelf: 'center',
        padding: 8,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        textAlign: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginTop:10,
        marginBottom: 30
    },
    signin: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold'
    },
})
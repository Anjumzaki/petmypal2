import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

export default (props) => {
    return(
    <View style={[styles.Container, props.style]}>
        <Image 
            style={{ height:20, width:120,}}
            source={props.source}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        // justifyContent:'flex-end',
        alignItems:'center',
<<<<<<< HEAD
        marginBottom:20
=======
        marginTop: 150,
        marginBottom:50
>>>>>>> 141026d5c2a7a189c4a7dd4c30956b858c9f384d
    }
})
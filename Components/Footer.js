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
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems:'center',
        position: 'absolute',
        alignSelf: 'center',
        top: '87%',
        paddingBottom:50
    }
})
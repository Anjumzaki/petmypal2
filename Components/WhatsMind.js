import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors';
import WhatsMindButton from './WhatsMindButton';

export default (props) => {

    return (
            <View
                style={styles.container}>
                <Image 
                    // source={props.source}
                    style={{height:45,width:45, marginLeft:5}}
                    source={props.source}
                    resizeMode={'contain'}
                />
                <WhatsMindButton
                    searchText="What's on your mind?"
                    onPress={props.onPress}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        padding:5
    },
})
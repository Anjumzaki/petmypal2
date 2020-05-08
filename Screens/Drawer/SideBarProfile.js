import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <View
                style={styles.container}>
                <Text>Side Bar</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
    },
})
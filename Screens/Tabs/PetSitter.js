import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../../Components/StatusBar';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>
                <Image
                    source={require('../../assets/images/petSitterBack.png')}
                    resizeMode={'cover'}
                    style={{height:200, width: width}}
                />
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
    },
})
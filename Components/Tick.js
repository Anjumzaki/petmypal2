import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import Colors from '../Constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
        <View style={styles.tickContainer}>
            <TouchableOpacity>
                <Image
                    source={require('../assets/images/tick.png')}
                    resizeMode={'contain'}
                    style={styles.tick}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tickContainer:{
        position:'absolute',
        left: '80%'
    },
    tick:{
        position: 'relative',
        width: 25,
        height: 45,
    }
})
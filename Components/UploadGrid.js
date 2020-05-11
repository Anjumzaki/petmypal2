import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors';
import Tick from './Tick';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.Grid}>
                <View style={styles.childGrid}>
                        <Image
                            source={require('../assets/images/p1.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    <Tick />
                </View>
                <View style={styles.childGrid}>
                        <Image
                            source={require('../assets/images/p2.png')}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                        <Tick />
                </View>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        width:width,
    },
    Grid:{
        flexDirection:'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        paddingHorizontal: 5,
        marginTop: 5
    },
    childGrid:{
        width: '33%',
        height: 120,
        padding:5
    },
    image:{
        width: '100%',
        height: 120
    }
})
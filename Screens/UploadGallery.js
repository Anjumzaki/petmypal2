import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../Constants/Colors'
import StatusBar from '../../Components/StatusBar';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>

                <View style={styles.description}>

                    <Image
                        source={require('../../assets/images/catProfile.png')}
                        style={{height:50, width:50}}
                    />

                    <View style={{flexDirection: 'column', marginLeft:5}}>
                        <Text style={styles.name}>Cat Walker</Text>
                        <Text style={styles.desc}>Cat Walking | Cat Grooming</Text>
                        <Text style={styles.time}>Timing: 10AM - 5PM (Mon-Sat)</Text>
                    </View>
   
                </View>

                <GridView />

            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        backgroundColor: Colors.white
    },
    description:{
        position: 'absolute', 
        top: 120, 
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    name:{
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 18
    },
    desc:{
        color: Colors.white,
        fontSize: 12
    },
    time:{
        color: Colors.white,
        fontSize: 12
    },
})
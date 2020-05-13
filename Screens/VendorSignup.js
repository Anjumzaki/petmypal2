import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import StatusBar from '../Components/StatusBar'
import Colors from '../Constants/Colors'
import {getStatusBarHeight} from 'react-native-status-bar-height';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <View style={{ width: width, height: height }}>
                <StatusBar />
                <ImageBackground source={require('../assets/images/Group.png')} style={styles.image}>
       
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.firsttext}>Signup as Vendor</Text>
                    <Text style={styles.Secondtext}>Sharing pet stories was not that easy. Just create an account and use it like other social media sites</Text>

                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={styles.fb}>Pet Service Provider</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => navigation.navigate('VendorWelcome')}
                        >
                            <Text style={styles.gmtext}>Signup as Veterinary</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
    image:
    {
        width: width,
        height: height,
        paddingHorizontal: 10
    },
    paltext: {
        width: 80,
        height:80,
        alignSelf: 'flex-end',
        marginTop:getStatusBarHeight()+10
    },
    textview:
    {
        flex: 1,
        top: '60%',
        position: 'absolute',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 10
    },
    firsttext:
    {
        fontSize: 24,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    Secondtext:
    {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        top: 10
    },
    fb: {
        borderWidth: 2,
        borderColor: Colors.primary,
        width: '80%',
        alignSelf: 'center',
        fontSize: 18,
        padding: 10,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        color: 'white',
        textAlign: 'center'
    },
    gmtext:
    {
        borderWidth: 2,
        top: 10,
        borderColor: Colors.white,
        alignSelf: 'center',
        width: '80%',
        fontSize: 18,
        padding: 10,
        borderRadius: 24,
        backgroundColor: Colors.white,
        color: 'black',
        textAlign: 'center'

    },
    email: {

        borderWidth: 2,
        borderColor: Colors.primary,
        width: '80%',
        alignSelf: 'center',
        fontSize: 18,
        padding: 10,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        color: 'white',
        textAlign: 'center',
        top: 18


    }

})
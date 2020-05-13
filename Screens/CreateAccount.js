import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors'
import Footer from '../Components/Footer';
import CheckBox from '@react-native-community/checkbox'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Category from '../Components/Category';
import Images from '../Constants/Images'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={require('../assets/images/Create.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Create account</Text>
                    <Text style={styles.logintext}>Create your free account today</Text>
                </View>
           
               <View style={{flex: 1, marginTop:'20%'}}>
               <Text style={styles.logintext}>Select  your pet catagory</Text>

                <View style={{flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}>
                    <Category 
                        source={Images.pet1}
                        categoryName="Rodent"
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CreateAccountCategory')}
                    >
                        <Text style={styles.ChangePet}>Change Pet</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={{marginTop:'10%'}}>
                    <Input
                        source={Images.businessicon}
                        placeholder="Business Name" 
                    />

                    <FlatButton
                        ButtonText="Next"
                        onPress={() => navigation.navigate('VerifyNumber')}
                    />
                </View>

               </View>
                
                <Footer 
                    source={require('../assets/images/CreateFooter.png')}
                />

                </ImageBackground>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
    },
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
        marginTop:getStatusBarHeight()+5
    },
    textview: {
        flexDirection: 'column',
        position: 'absolute',
        top: '15%',
        alignSelf: 'center',
    },
    welcome: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
    },
    logintext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
    },
    ChangePet:{
        color: Colors.white,
        textDecorationLine: 'underline',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

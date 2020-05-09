import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Button from '../Components/Button';
import Colors from '../Constants/Colors'
import CircleInput from '../Components/CircleInput';
import Footer from '../Components/Footer';
import Input from '../Components/Input'
import {getStatusBarHeight} from 'react-native-status-bar-height';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <View
                style={styles.container}>
                <StatusBar/>
                <ImageBackground source={require('../assets/images/Pet.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Enter the code to verify{'\n'} your phone number</Text>
                    <Text style={styles.logintext}>Verification code has been sent to your {'\n'} mobile number</Text>
                    <Image 
                        source={require('../assets/images/PetProfile.png')}
                        style={styles.petProfile}
                        resizeMode={'contain'}
                    />
                </View>

                <View style={{flex:1 , marginTop:'60%'}}>
                    <Input
                        source= {require('../assets/images/person.png')}
                        placeholder="Pet name" 
                    />
                    <Input
                        source= {require('../assets/images/person.png')}
                        placeholder="Pet type" 
                    />

                    <Input
                        source= {require('../assets/images/person.png')}
                        placeholder="Sub type" 
                    />

                    <Input
                        source= {require('../assets/images/person.png')}
                        placeholder="Date of birth" 
                    />

                    <Input
                        source= {require('../assets/images/person.png')}
                        placeholder="Gender" 
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                            style={{backgroundColor: Colors.primary, color: Colors.white, marginLeft:5 ,marginRight:5}} 
                            ButtonText="Add pet"
                            //   onPress={() => navigation.navigate('UserVerified')}  
                            />
                            <Button
                            style={{backgroundColor: Colors.white, color: Colors.black, marginLeft:5 ,marginRight:5}}
                            ButtonText="Add more pet"
                            //   onPress={() => navigation.navigate('UserNumber')}
                            />
                        </View>
                    </View>    
                </View>
                
                    
                <Footer 
                    source={require('../assets/images/Footer4.png')}
                />
                </ImageBackground>
            </View>
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
    petProfile:{
        width: 80,
        height:80,
        flexDirection: 'row',
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 10,
        marginBottom: 10
    },
    textview: {
        flexDirection: 'column',
        position: 'absolute',
        top: '14%',
        alignSelf: 'center',
    },
    welcome: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign:'center'
    },
    logintext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        marginTop: 5
    },
    buttonContainer:{
        flexDirection: 'column',
        alignSelf: 'center',
        // marginTop:10
    },
    button: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }
})

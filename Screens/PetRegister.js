import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Button from '../Components/Button';
import Colors from '../Constants/Colors'
import CircleInput from '../Components/CircleInput';
import Footer from '../Components/Footer';
import Input from '../Components/Input'
import FlatButton from '../Components/FlatButton';
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
                <ImageBackground source={require('../assets/images/Pet.png')} style={styles.image} >
                <Image
                    source={require('../assets/images/icon.png')} 
                    style={styles.paltext}
                    resizeMode={'contain'}
                />

                <View style={styles.textview}>
                    <Text style={styles.welcome}>Tell us more about [PET NAME]</Text>
                </View>

                <View style={{flex:1 , marginTop:'5%'}}>
                    <Input
                        source= {require('../assets/images/subtype.png')}
                        placeholder="Sub type" 
                    />

                    <View style={styles.category}>
                        <Category 
                            source={Images.puppy}
                            categoryName="Puppy"
                        />

                        <Category 
                            source={Images.smalldog}
                            categoryName="Small Dog"
                        />

                        <Category 
                            source={Images.mediumdog}
                            categoryName="Medium Dog"
                        />
                    </View>

                    <View style={styles.category}>
                        <Category 
                            source={Images.largedog}
                            categoryName="Large Dog"
                        />

                        <Category 
                            source={Images.giantdog}
                            categoryName="Giant Dog"
                        />
                    </View>

                    <View style={{marginTop: 30}}>
                        <Input
                            source= {Images.subtype}
                            placeholder="Date of birth/Adaption Date*" 
                        />
                        <Input
                            source= {Images.others}
                            placeholder="Gender" 
                        />

                        <FlatButton
                            ButtonText="Next"
                            onPress={() => navigation.navigate('Address')}
                        />
                    </View>


                </View>
                
                    
                <Footer 
                    source={require('../assets/images/Footer4.png')}
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
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection: 'column',
        alignSelf: 'center',
        // marginTop:10
    },
    button: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    category:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    }
})

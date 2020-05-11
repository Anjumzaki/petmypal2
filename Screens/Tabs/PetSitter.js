import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../Constants/Colors'
import StatusBar from '../../Components/StatusBar';
import FlatButton from '../../Components/FlatButton'
import WhatsMind from '../../Components/WhatsMind'
import PostFeed from '../../Components/PostFeed'
import GridView from '../../Components/GridView';

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
                    style={{height:250, width: width,}}
                />

                <View style={{flexDirection: 'row', position: "absolute", left:'60%', justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/images/rating.png')}
                        resizeMode={'contain'}
                        style={{height:30, width: 40, marginLeft: 10, }}
                        />
                    </TouchableOpacity>  

                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/images/followers.png')}
                        resizeMode={'contain'}
                        style={{height:30, width: 40, marginLeft: 10, }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                        source={require('../../assets/images/whiteMenu.png')}
                        resizeMode={'contain'}
                        style={{height:30, width: 20, marginLeft: 10, }}
                        />
                    </TouchableOpacity>                    
                </View>

                <View style={styles.description}>

                    <Image
                        source={require('../../assets/images/catProfile.png')}
                        style={{height:50, width:50}}
                    />

                    <View style={{flexDirection: 'column', marginLeft:5}}>
                        <Text style={styles.name}>Cat Walker</Text>
                        <Text style={styles.desc}>Cat Walking | Cat Grooming</Text>
                        <Text style={styles.time}>Timing: 10AM - 5PM (Mon-Sat)</Text>

                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity>
                                <Image
                                source={require('../../assets/images/locationSitter.png')}
                                resizeMode={'contain'}
                                style={{height:50, width: 40, }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                source={require('../../assets/images/shareSitter.png')}
                                resizeMode={'contain'}
                                style={{height:50, width: 40, }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                source={require('../../assets/images/inviteSitter.png')}
                                resizeMode={'contain'}
                                style={{height:50, width: 40,  }}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{width: 150}}>
                        <FlatButton
                            ButtonText="Contact us"
                        />
                    </View>
                    
                </View>


                <WhatsMind 
                    source={require('../../assets/images/profilePicture.png')}
                    onPress={() => navigation.navigate('WhatsOnMind')}
                />

                <View style={styles.upload}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Gallery</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UploadGallery')}
                    >
                        <Image
                            source={require('../../assets/images/upload.png')}
                            resizeMode={'contain'}
                            style={{height: 25, width: 60}}
                        />
                    </TouchableOpacity>
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
    upload:{
        flexDirection: 'row', 
        justifyContent:'space-between', 
        paddingHorizontal: 10
    }
})
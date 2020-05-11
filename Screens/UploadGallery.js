import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../Constants/Colors'
import StatusBar from '../Components/StatusBar';
import GridView from '../Components/GridView'
import UploadGrid from '../Components/UploadGrid';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>

                <View style={styles.description}>
                    <Image
                        source={require('../assets/images/catProfile.png')}
                        style={{height:50, width:50}}
                    />

                    <View style={{flexDirection: 'column', marginLeft:5}}>
                        <Text style={styles.name}>Cat Walker</Text>
                        <Text style={styles.desc}>Cat Walking | Cat Grooming</Text>
                    </View>
                </View>

                <View style={styles.upload}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/frinedsUpload.png')}
                            style={{height:30, width:120}}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/pageUpload.png')}
                            style={{height:30, width:120}}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.upload}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/smileUpoad.png')}
                            style={{height:30, width:80}}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/videoUpload.png')}
                            style={{height:30, width:80}}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../assets/images/imagesUpload.png')}
                            style={{height:30, width:80}}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>

                <UploadGrid />

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
        padding : 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name:{
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 18
    },
    desc:{
        color: Colors.black,
        fontSize: 12
    },
    time:{
        color: Colors.black,
        fontSize: 12
    },
    upload:{
        padding : 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
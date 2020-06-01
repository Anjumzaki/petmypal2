import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Colors from '../Constants/Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default (props) => {

    return (
        <View style={styles.AddPet}>
            <TouchableOpacity
                style={styles.container}
            >
                <View style={{flexDirection:'column'}}>
                    <Image 
                        style={styles.image}
                        source={require('../assets/images/profilePicture.png')}
                    />
                    <Text style={{textAlign:'center'}}>Sandy</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.container}
                onPress={props.onPress}
            >
                <View style={{flexDirection:'column'}}>
                    <Image 
                        style={styles.image}
                        source={require('../assets/images/addPet.png')}
                    />
                    <Text style={{textAlign:'center'}}>Add Pet</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    AddPet:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',         
        height:80,
        width: width,
        backgroundColor: Colors.white,
        marginTop: 5
    },
    container:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    image:{
        height:50,
        width:50, 
        marginLeft:5
    }
})
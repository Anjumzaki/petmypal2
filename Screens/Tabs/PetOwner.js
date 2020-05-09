import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import StatusBar from '../../Components/StatusBar';
import WhatsMind from '../../Components/WhatsMind';
import AddPet from '../../Components/AddPet';
import Colors from '../../Constants/Colors'
import SuggestFriends from '../../Components/SuggestFriends';
import WelcomePetMyPal from '../../Components/WelcomePetMyPal';
import PostFeed from '../../Components/PostFeed';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>
                
                <WhatsMind 
                    source={require('../../assets/images/profilePicture.png')}
                    onPress={() => navigation.navigate('WhatsOnMind')}
                />
                
                <AddPet 
                    // onPress= {() => navigation.navigate('AddNewPet')}
                />

                <SuggestFriends/>

                <WelcomePetMyPal />

                <PostFeed 
                    source={require('../../assets/images/profilePicture.png')}
                    PostSource={require('../../assets/images/Post.png')}
                    CommentClick={() => navigation.navigate('Comment')}
                />

            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
    },
    SuggestFriends:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',         
        height:100,
        width: width,
        backgroundColor: Colors.white,
        marginTop: 5
    },
    Suggest:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22
    }
})
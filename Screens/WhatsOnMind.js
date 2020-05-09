import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import StatusBar from '../Components/StatusBar';
import CommentInput from '../Components/CommentInput';
import Colors  from '../Constants/Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <View
                style={styles.container}>
                <StatusBar/>

                <CommentInput 
                    searchText="Whats on your mind?"
                />
            </View>
            )
}

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor: Colors.white
    }
})
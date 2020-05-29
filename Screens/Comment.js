import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import StatusBar from '../Components/StatusBar';
import Comment from '../Components/Comment';
import CommentInput from '../Components/CommentInput';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default ({navigation}) => {

    return (
            <ScrollView
                style={styles.container}>
                <StatusBar/>

                <Comment 
                    source={require('../assets/images/commentProfile.png')}
                />

                <Comment 
                    source={require('../assets/images/commentProfile.png')}
                />

                {/* <CommentInput /> */}
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    
})
import React, { Component } from 'react';
import { TextInput, StyleSheet,TouchableOpacity, View, Text, Dimensions, Image, ScrollView } from 'react-native'
import Colors from '../../Constants/Colors';
import Notification from '../../Components/NotificationComponent'
import HeaderNewsFeed from '../../Components/HeaderNewsFeed';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default () => {
    return( 
        <ScrollView style={styles.container}>
            {/* <HeaderNewsFeed />  */}
            <Notification />
            <Notification style={{backgroundColor: Colors.unread}}/>
            <Notification style={{backgroundColor: Colors.unread}}/>
            <Notification />
            <Notification />
            <Notification style={{backgroundColor: Colors.unread}}/>
            <Notification style={{backgroundColor: Colors.unread}}/>
            <Notification />            
            <Notification />
            <Notification style={{backgroundColor: Colors.unread}}/>
        </ScrollView>
)}

const styles = StyleSheet.create({ 
    container:{
        width:width,
        height: height,
        backgroundColor: Colors.white,
        marginTop:getStatusBarHeight()
    },
})
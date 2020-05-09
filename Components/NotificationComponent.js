import React, { Component } from 'react';
import { TextInput, StyleSheet,TouchableOpacity, View, Text, Dimensions, Image } from 'react-native'
import Colors from '../Constants/Colors';
// import Notification from '../../Components/NotificationComponent'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default (props) => {
    return( 
        <TouchableOpacity style={[styles.container, props.style]}>
            <Image
                style={{height:40, width:40,}}
                source={require('../assets/images/profilePicture.png')} 
                resizeMode={'contain'}
            />

            <View style={styles.content}>
                
                <View style={styles.Time}>
                    <Text style={styles.name} >Katherine John</Text>
                    <Text>2 days ago</Text>
                </View>

                <Text style={styles.notification} >Lorem Ipsum is simply dummy text of the printing and typesetting industry ... </Text>
            </View>
            
        </TouchableOpacity>
)}

const styles = StyleSheet.create({ 
    container:{
        width:width,
        flexDirection:'row',
        padding:10,
        borderBottomColor: Colors.grey,
        borderBottomWidth: 0.3
    },
    content:{
        flex:1, 
        flexDirection:'column', 
        justifyContent:'center',  
        paddingLeft: 5, 
        paddingRight: 5
    },
    Time:{
        flex:1, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name:{
        fontSize:16,
        fontWeight: 'bold'
    },
    notification:{
        fontSize:14
    }
})
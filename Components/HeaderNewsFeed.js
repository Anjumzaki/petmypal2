import React, { Component } from 'react';
import { Text, StyleSheet,TouchableOpacity, View, Image} from 'react-native'
import Colors from '../Constants/Colors'
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default (props) => {
    return(
        <View style={styles.Container}>
            
            <Text style={styles.title}> News Feed </Text>
            <View style={{flexDirection: 'row-reverse'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/menu.png')}
                        resizeMode={'contain'}
                        style={{height:15, width:15, marginRight: 10}}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/images/menu.png')}
                        resizeMode={'contain'}
                        style={{height:30, width:30 , marginRight: 10}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        marginTop:getStatusBarHeight(),
        padding: 10,
        backgroundColor: Colors.success,
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})
import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, } from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Colors from '../Constants/Colors'

export default (props) => {

    return (
        <View style={{alignContent:'center'}}>
            <TouchableOpacity style={styles.category}>
                <Image
                    source = {props.source}
                    resizeMode={'contain'}
                    style={{width:30, height: 50 }}
                />
                <Text style={styles.categoryName}>{props.categoryName}</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
  category:{
      backgroundColor: Colors.primary,
      padding: 5,
      height: 60,
      width: 60,
      borderRadius: 100/2,
      marginTop: 10,
      marginHorizontal:15,
      alignContent:'center',
      alignItems:'center'
  },
  categoryName:{
      color: Colors.white,
      marginTop: 5,
      width:60,
      alignItems:'center',
      textAlign:'center'
  }  
})
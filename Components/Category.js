import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, } from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Colors from '../Constants/Colors'

export default (props) => {

    return (
        <View>
            <TouchableOpacity style={styles.category}>
                <Image
                    source = {props.source}
                    resizeMode={'contain'}
                    style={{width: 50, height: 50}}
                />
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
  }  
})
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import Colors from '../Constants/Colors'

export default () => {
    return(
        <View 
            style={styles.welcome}
        >
            <Text style={{fontSize: 18, textAlign: 'center'}}> Welcome to PetMyPal </Text>
            <Text style={{fontSize: 16, marginLeft: '10%'}}> Lorem Ipsum is simply dummy text of the printing {'\n'} and typesetting industry ... </Text>
            <Image
                style={styles.image}
                source={require('../assets/images/welcome.png')}
                resizeMode={'contain'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    welcome:{
        marginTop: 5,
        backgroundColor: Colors.white,
        paddingTop:5,
        paddingBottom:5
    },
    image:{
        marginLeft: '10%',
        height:200,
        width:'100%'
    }
})
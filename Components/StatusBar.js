import React from 'react';
import {StatusBar} from 'react-native'
import Colors from '../Constants/Colors'

export default () => {
    return(
        <>
            <StatusBar backgroundColor={Colors.primary} />
        </>
    )
}
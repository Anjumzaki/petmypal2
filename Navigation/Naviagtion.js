import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Splash from '../Screens/Splash'
import Welcome from '../Screens/Welcome'
import Signup from '../Screens/Signup'
import Signin from '../Screens/Signin'
import CreateAccount from '../Screens/CreateAccount'
import UserNumber from '../Screens/UserNumber'
import VerifyNumber from '../Screens/VerifyNumber';
import UserVerified from '../Screens/UserVerified';
import Address from '../Screens/Address';
import PetRegister from '../Screens/PetRegister';
import ForgetPassword from '../Screens/ForgetPassword';
import ForgetPasswordCode from '../Screens/ForgetPasswordCode';
import UserNewsFeed from '../Screens/UserNewsFeed'
import SideBarProfile from '../Screens/Drawer/SideBarProfile'
import DrawerList from '../Screens/Drawer/DrawerList'
import PetOwner from '../Screens/Tabs/PetOwner';
import PetSitter from '../Screens/Tabs/PetSitter';
import AddNewPet from '../Screens/Tabs/AddNewPet';
import WhatsOnMind from '../Screens/WhatsOnMind'
import Comment from '../Screens/Comment';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

export default () => {

    createDrawerTab = () => {
        return(
        <Drawer.Navigator
            drawerPosition = 'right'
            drawerContent={ props => <DrawerList {...props}/> }
        >
            <Drawer.Screen name="UserNewsFeed"
                // component={UserNewsFeed}
                children={createTopTabs}
                options={{headerShown: false}}
            />
        </Drawer.Navigator>
        )
    }

    createTopTabs = () =>{
        return(
            <TopTab.Navigator>
                <TopTab.Screen name="PetOwner" 
                    component={PetOwner}
                    options={{title: 'Pet Owner'}}
                />
                <TopTab.Screen name="PetSitter" 
                    component={PetSitter} 
                    options={{title: 'Pet Sitter'}}
                />
            </TopTab.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" 
                    component={Splash}
                    options={{ headerShown: false }}
                />   
                <Stack.Screen name="Welcome" 
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Signup" 
                    component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Signin" 
                    component={Signin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="ForgetPassword" 
                    component={ForgetPassword}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="ForgetPasswordCode" 
                    component={ForgetPasswordCode}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="CreateAccount" 
                    component={CreateAccount}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="UserNumber" 
                    component={UserNumber}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VerifyNumber" 
                    component={VerifyNumber}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="UserVerified" 
                    component={UserVerified}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Address" 
                    component={Address}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="PetRegister" 
                    component={PetRegister}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="WhatsOnMind" 
                    component={WhatsOnMind}
                    options={{ 
                        headerTitleAlign: 'center',
                        headerBackTitle:'none',
                        headerTitle: 'News Feed',
                        headerRight: () => (
                            <Text
                                title="Post"
                            />
                        ) 
                    }}
                />
                <Stack.Screen name="Comment" 
                    component={Comment}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="UserNewsFeed"
                    children={createDrawerTab}
                    options={{
                        headerShown: false 
                        // headerTitleAlign: 'center',
                        // headerBackTitle:'none',
                        // headerTitle: 'News Feed',
                        // headerLeft: () => (
                        //     <Text
                        //         title=""
                        //         border= 'none'
                        //     />
                        // )
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
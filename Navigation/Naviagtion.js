import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import Home from '../Screens/BottomTabs/Home'
import Contacts from '../Screens/BottomTabs/Contacts'
import Notification from '../Screens/BottomTabs/Notifcation'
import Chat from '../Screens/BottomTabs/Chat'
import Colors from '../Constants/Colors';
import UploadGallery from '../Screens/UploadGallery';
import VendorSignin from '../Screens/VendorSignin';
import VendorSignup from '../Screens/VendorSignup';
import CreateAccountCategory from '../Screens/CreateAccountCategory';
import CreatePassword from '../Screens/CreatePassword'
import VendorWelcome from '../Screens/Vendor/VendorWelcome';
import VendorSetup from '../Screens/Vendor/VendorSetup'
import VendorverifyNumber from '../Screens/Vendor/VendorverifyNumber';
import VendorVerified from '../Screens/Vendor/VendorVerified';
import VendorNumber from '../Screens/Vendor/VendorNumber';
import VendorAccountSetup from '../Screens/Vendor/VendorAccountSetup';
import VendorAddress from '../Screens/Vendor/VendorAddress';
import VendorProfile from '../Screens/Vendor/VendorProfile'
import VendorSetupComplete from '../Screens/Vendor/VendorSetupComplete'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

export default () => {

    createBottomTab = () => {
        return(
        <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{activeTintColor: Colors.primary}}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let activeIcon, inactiveIcon;
    
                if(route.name == 'Home'){
                    activeIcon = require('../assets/images/activeHome.png');
                    inactiveIcon = require('../assets/images/inactiveHome.png');
                }
                else if(route.name == 'Contacts'){
                    activeIcon = require('../assets/images/activecontact.png');
                    inactiveIcon = require('../assets/images/contact.png');
                }
                else if(route.name == 'Notification'){
                    activeIcon = require('../assets/images/activenotification.png');
                    inactiveIcon = require('../assets/images/notification.png');
                }
                else if(route.name == 'Chat'){
                    activeIcon = require('../assets/images/activechat.png');
                    inactiveIcon = require('../assets/images/chat.png');
                }
              
                return <Image 
                        source={ color == '#8E8E8F' ? inactiveIcon : activeIcon} style={{width: size, height: size}} 
                        resizeMode={'contain'}
                        />
            }
          })}
        >
            <BottomTab.Screen name="Home" children={createDrawerTab}/>
            <BottomTab.Screen name="Contacts" component={Contacts} />
            <BottomTab.Screen name="Notification" component={Notification} />
            <BottomTab.Screen name="Chat" component={Chat} />
        </BottomTab.Navigator>
    )
}

    createDrawerTab = () => {
        return(
        <Drawer.Navigator
            drawerPosition = 'right'
            drawerContent={ props => <DrawerList {...props}/> }
        >
            <Drawer.Screen name="DrawerList"
                children={createTopTabs}
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
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name="Splash" 
                    component={Splash}
                    options={{ headerShown: false }}
                />   
                <Stack.Screen name="Welcome" 
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorSignup" 
                    component={VendorSignup}
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
                <Stack.Screen name="VendorSignin"
                    component= {VendorSignin}
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
                <Stack.Screen name="CreateAccountCategory" 
                    component={CreateAccountCategory}
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
                <Stack.Screen name="CreatePassword" 
                    component={CreatePassword}
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
                <Stack.Screen name="VendorWelcome" 
                    component={VendorWelcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorSetup" 
                    component={VendorSetup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorverifyNumber" 
                    component={VendorverifyNumber}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorVerified" 
                    component={VendorVerified}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorNumber" 
                    component={VendorNumber}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorAccountSetup" 
                    component={VendorAccountSetup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorAddress" 
                    component={VendorAddress}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorProfile" 
                    component={VendorProfile}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="VendorSetupComplete" 
                    component={VendorSetupComplete}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="WhatsOnMind" 
                    component={WhatsOnMind}
                    options={{ 
                        headerTitleAlign: 'center',
                        headerBackTitle:'none',
                        headerTitle: 'News Feed',
                        headerRight: () => (
                            <TouchableOpacity style={{padding:10}}>
                                <Text style={{fontSize:18}}>Post</Text>
                            </TouchableOpacity>
                        ) 
                    }}
                />
                <Stack.Screen name="Comment" 
                    component={Comment}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home"
                    children={createBottomTab}

                />
                <Stack.Screen name="UploadGallery"
                    children={UploadGallery}
                    options={{
                        headerTitleAlign: 'center',
                        headerBackTitle:'none',
                        headerTitle: 'Upload Gallery',
                        headerRight: () => (
                            <TouchableOpacity style={{padding:10}}>
                                <Text style={{fontSize:18}}>Upload</Text>
                            </TouchableOpacity>
                        )
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}
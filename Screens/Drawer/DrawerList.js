import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';;
import Colors from '../../Constants/Colors';;

export default (props) => {
  return  (
    <View style={{flex: 1}}>
      <Image
        style={styles.profile}
        source={require('../../assets/images/profile.png')}
        resizeMode={'cover'}
      />
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/person.png')}
          />
          <DrawerItem
            labelStyle={{fontWeight: 'bold', fontSize: 18}}
            label="Katherine John"
          />
        </View>

        <DrawerItem
          style={styles.items}
          labelStyle={{fontSize: 10, marginLeft: 20}}
          label="Member since March, 2012."
        />

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/pets.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Pets: 2"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/happy.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Happy Hounds (Dogs Services)"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/happy.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Kati Bounds (Cats Services)"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/updateProfile.png')}
          />
          <DrawerItem
            labelStyle={styles.labelItem}
            style={styles.items}
            label="Update Profile"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/petSitter.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Become pet sitter"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/page.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Create page"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/cgroup.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Create group"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/invite.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Invite friends"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/manage.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Manage pets"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/changePassword.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Change password"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/securitySetting.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Security setting"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/close.png')}
          />
          <DrawerItem
            style={styles.items}
            labelStyle={styles.labelItem}
            label="Close your account"
          />
        </View>

        <View style={styles.drawerItem}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/logout.png')}
          />
          <DrawerItem labelStyle={styles.labelItem} label="Logout" />
        </View>
      </DrawerContentScrollView>
    </View>
  );;
};

const styles = StyleSheet.create({
  items: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.4,
    width: '100%',
  },
  profile: {
    height: 180,
    width: '100%',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  labelItem: {
    fontSize: 12,
  },
  icon: {
    height: 15,
    width: 15,
  },
});
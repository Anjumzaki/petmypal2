/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StatusBar from '../Components/StatusBar';
import Input from '../Components/Input';
import FlatButton from '../Components/FlatButton';
import Colors from '../Constants/Colors';
import Footer from '../Components/Footer';
import CheckBox from '@react-native-community/checkbox';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../Constants/Images';
import {Loader} from '../Components/Loader';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CreatePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      password: '',
      passwordError: false,
      confirm_passwordError: false,
      confirm_password: '',
    };
  }

  // loading //
  _controlLoadingView = () =>
    this.setState({isLoadingVisible: !this.state.isLoadingVisible});
  // loading //

  // validations //
  validation() {
    const {password, confirm_password} = this.state;
    if (password.trim() === '' && confirm_password.trim() === '') {
      this.setState({passwordError: true, confirm_passwordError: true});
      return false;
    }

    // check if password and confirm is same ///
    if (password !== confirm_password) {
      this.setState({passwordError: true, confirm_passwordError: true});
      return false;
    }

    if (password.trim() === '') {
      this.setState({emailError: true});
      return false;
    }
    if (confirm_password.trim() === '') {
      this.setState({passwordError: true});
      return false;
    }

    return true;
  }
  // validations //

  _Next = () => {
    if (this.validation()) {
      this._controlLoadingView();
      const {password} = this.state;
      this.props.navigation.navigate('PetRegister', {
        password: password,
      });
      this._controlLoadingView();
    }
  };

  // function for checkbox  //
  setSelection = () => {
    if (!this.state.isSelected) {
      this.setState({isSelected: true});
    }
    this.setState({isSelected: false});
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar />
        <ImageBackground
          source={require('../assets/images/Create.png')}
          style={styles.image}>
          <Loader visible={this.state.isLoadingVisible} />
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.paltext}
            resizeMode={'contain'}
          />

          <View style={styles.textview}>
            <Text style={styles.welcome}>Create account</Text>
            <Text style={styles.logintext}>Create your free account today</Text>
          </View>

          <View style={{flex: 1, marginTop: '30%'}}>
            <Input
              source={Images.password}
              placeholder="Password"
              onChangeText={(password) =>
                this.setState({password: password, passwordError: false})
              }
            />

            {this.state.passwordError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                Password is required
              </Text>
            ) : null}

            <Input
              source={Images.password}
              placeholder="Re-type"
              onChangeText={(confirm_password) =>
                this.setState({
                  confirm_password: confirm_password,
                  confirm_passwordError: false,
                })
              }
            />

            {this.state.confirm_passwordError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                Confirm Password is required
              </Text>
            ) : null}
            <Text style={styles.policy}>
              By clicking Sign Up, you agree to{' '}
              <Text style={{color: Colors.primary}}>
                our Terms,{'\n'}
                Data Policy
              </Text>{' '}
              and <Text style={{color: Colors.primary}}>Cookie Policy </Text>
              .You may{'\n'}
              receive SMS notifications from us{'\n'}
              and can opt out at any time.
            </Text>
            <View style={styles.CheckBoxContainer}>
              <CheckBox
                value={this.state.isSelected}
                style={styles.checkbox}
                onPress={this.setSelection()}
              />
              <Text style={styles.label}>Accept the Terms and Conditions</Text>
            </View>
            <FlatButton
              ButtonText="Next"
              onPress={() => {
                this._Next();
              }}
            />
          </View>
          <Footer source={require('../assets/images/Footer3.png')} />
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  image: {
    width: width,
    height: height,
    paddingHorizontal: 10,
  },
  paltext: {
    width: 80,
    height: 40,
    alignSelf: 'flex-end',
    marginTop: getStatusBarHeight(),
  },
  textview: {
    flexDirection: 'column',
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  logintext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  policy: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  checkbox: {
    borderColor: Colors.white,
  },
  label: {
    color: Colors.white,
    top: 5,
  },
});

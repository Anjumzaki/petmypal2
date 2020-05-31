/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import StatusBar from '../Components/StatusBar';
import Button from '../Components/Button';
import Colors from '../Constants/Colors';
import CircleInput from '../Components/CircleInput';
import Footer from '../Components/Footer';
import Input from '../Components/Input';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../Constants/Images';
import {Loader} from '../Components/Loader';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class VerifyNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      isLoadingVisible: false,
      Verificationcode: '',
      VerificationcodeError: false,
    };
  }

  componentDidMount = () => {
    const {phoneNumber} = this.props.route.params;
    this.setState({phoneNumber: phoneNumber});
  };

  Resend = () => {
    this._controlLoadingView();
    const {phoneNumber} = this.state;
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append('server_key', 'f28ce8096b13cfc4e385a1ef396dd94e');
    formdata.append('phone_number', phoneNumber);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('https://dev.petmypal.biz/api/send-code-sms\n', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(JSON.stringify(result.errors.error_text).slice(1, -1));
        this._controlLoadingView();
      })
      .catch((error) => alert('error', error));
  };
  // loading //
  _controlLoadingView = () =>
    this.setState({_controlLoadingView: !this.state.isLoadingVisible});
  // loading //

  // validations //
  validation() {
    const {Verificationcode} = this.state;
    if (Verificationcode.trim() === '' || Verificationcode.length < 4) {
      this.setState({
        VerificationcodeError: true,
      });
      return false;
    }
    if (Verificationcode.trim() === '') {
      this.setState({VerificationcodeError: true});
      return false;
    }

    return true;
  }
  // validations //

  _verifyCode = () => {
    if (this.validation()) {
      this._controlLoadingView();
      const {phoneNumber, Verificationcode} = this.state;
      var myHeaders = new Headers();

      var formdata = new FormData();
      formdata.append('server_key', 'f28ce8096b13cfc4e385a1ef396dd94e');
      formdata.append('phone_number', phoneNumber);
      formdata.append('confirm_code', Verificationcode);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://dev.petmypal.biz/api/verification-code-sms',
        requestOptions,
      )
        .then((response) => response.json())
        .then((result) => {
          alert(JSON.stringify(result));
          this._controlLoadingView();
        })
        .catch((error) => alert('error', error));
    }
  };
  render() {
    return (
      <View style={styles.container}>
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
            <Text style={styles.welcome}>
              Enter the code to verify{'\n'} your phone number
            </Text>
            <Text style={styles.logintext}>
              Verification code has been sent to your {'\n'} mobile number
            </Text>
          </View>

          <View style={{flex: 1, marginTop: '45%'}}>
            <Input
              source={Images.number}
              placeholder="Number"
              value={this.state.phoneNumber}
              editable={false}
            />

            <View style={styles.code}>
              <CircleInput
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(Verificationcode) =>
                  this.setState({
                    Verificationcode:
                      this.state.Verificationcode + Verificationcode,
                  })
                }
                style={styles.CircleInput}
              />

              <CircleInput
                maxLength={1}
                onChangeText={(Verificationcode) =>
                  this.setState({
                    Verificationcode:
                      this.state.Verificationcode + Verificationcode,
                  })
                }
                keyboardType="numeric"
                style={styles.CircleInput}
              />

              <CircleInput
                maxLength={1}
                onChangeText={(Verificationcode) =>
                  this.setState({
                    Verificationcode:
                      this.state.Verificationcode + Verificationcode,
                  })
                }
                keyboardType="numeric"
                style={styles.CircleInput}
              />

              <CircleInput
                maxLength={1}
                onChangeText={(Verificationcode) =>
                  this.setState({
                    Verificationcode:
                      this.state.Verificationcode + Verificationcode,
                    VerificationcodeError: false,
                  })
                }
                keyboardType="numeric"
                style={styles.CircleInput}
              />
            </View>
            {this.state.VerificationcodeError ? (
              <Text
                style={{
                  marginHorizontal: 50,
                  color: '#04B7EB',
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                Verification code is required
              </Text>
            ) : null}
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  style={{
                    backgroundColor: Colors.primary,
                    color: Colors.white,
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                  ButtonText="Verify"
                  onPress={() => this._verifyCode()}
                />
                <Button
                  style={{
                    backgroundColor: Colors.white,
                    color: Colors.black,
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                  ButtonText="Resend"
                  onPress={() => this.Resend()}
                />
              </View>
            </View>
          </View>

          <Footer source={require('../assets/images/VerifyFooter.png')} />
        </ImageBackground>
      </View>
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
    marginTop: 5,
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  CircleInput: {
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    // marginTop:10
  },
  button: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

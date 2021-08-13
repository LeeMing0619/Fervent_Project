// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import { StackActions } from '@react-navigation/routers';

import AsyncStorage from '@react-native-community/async-storage';

import Loader from './Components/Loader';

import CheckBox from './Components/CheckBox';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  
  const passwordInputRef = createRef();
  const [isSelected, setSelection] = useState(false);
  
  const handleCheckBox = () => {
    setSelection(!isSelected);
  }

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = JSON.stringify({
      email: userEmail,
      password: userPassword
    });

    fetch('http://192.168.1.108:8080/api/auth/signin', {
      method: 'POST',
      body: dataToSend,
      headers: {
        //Header Defination
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader
      setLoading(false);
      console.log(responseJson);
      console.log(responseJson.status);
      // If server response message same as Data Matched
      if (responseJson.status == 1) {
        console.log(isSelected);
        if (isSelected == 1)
          AsyncStorage.setItem('user_id', responseJson.id);
        console.log(responseJson.id);
        // navigation.push('DrawerNavigationRoutes');
        // navigation.replace('DrawerNavigationRoutes');
        navigation.dispatch(StackActions.replace('DrawerNavigationRoutes'));
      } else {
        setErrortext('Please check your email id or password');
        console.log('Please check your email id or password');
      }
    })
    .catch((error) => {
      //Hide Loader
      setLoading(false);
      console.error(error);
    });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/image/aboutreact.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}

            <View style={styles.SectionStyle}>
              <View style={styles.viewChk}>
                <CheckBox
                  selected={isSelected}
                  onPress={handleCheckBox}
                  text='Remember me'
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Register Now
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#ffbe76',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 50,
    marginBottom: 25,
  },
  buttonTextStyle: {
    //fontFamily: "abeezee-regular",
    color: '#FFFFFF',
    paddingVertical: 11,
    fontSize: 20,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    //fontFamily: "abeezee-regular",
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    //fontFamily: "abeezee-regular",
    color: '#ffbe76',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  viewChk: {
    width: 24,
    height: 28,
    //backgroundColor: "#E6E6E6"
  },
  
});

import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';
import RadioButton from 'react-native-radio-button';

import Loader from './Components/Loader';
import CheckBox from './Components/CheckBox';

const RegisterScreen = (props) => {
  const [firstname, setFirstNameText] = useState('');
  const [lastname, setLastNameText] = useState('');
  const [email, setEmailText] = useState('');
  const [checked, setChecked] = useState(1);

  const [password, setPasswordText] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const [gender, setGender] = useState('');
  const sexs = ["Male", "Female"];

  const [isSelected, setSelection] = useState(false);

  const firstnameInputRef = createRef();
  const lastnameInputRef = createRef();
  const emailInputRef = createRef();

  const handleCheckBox = () => {
    setSelection(!isSelected);
  }

  const handleSubmitButton = () => {
    setErrortext('');
    if (firstname == '' || lastname == '' || repeatPassword == '' || gender == '' || email == '' || password == '') {
      alert(
        "Please input all information.");
        return false;
    }
    //Show Loader
    if (password == repeatPassword) {      
      setLoading(true);
      fetch('http://192.168.1.108:8080/api/auth/signup', {
        method: 'POST',
        headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
        body: JSON.stringify({
          firstname: firstname, 
          lastname: lastname, 
          email: email,
          password: password,
          gender: gender,
          is_believer: checked,
          location: 'bbb'
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext('Registration Unsuccessful');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
    } else {
      alert(
        "Warnning", "Please input correct password.");
    }
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/image/success.png')}
          style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/image/register.png')}
            style={{
              width: '50%',
              height: 80,
              resizeMode: 'contain',
              marginTop: 30,
              marginBottom: 10,
            }}
          />          
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setFirstNameText(text)}
              defaultValue={firstname}
              underlineColorAndroid="#f000"
              placeholder="First Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={lastnameInputRef}
              onSubmitEditing={() =>
                lastnameInputRef.current && lastnameInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setLastNameText(text)}
              defaultValue={lastname}
              underlineColorAndroid="#f000"
              placeholder="Last Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              ref={emailInputRef}
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setEmailText(text)}
              defaultValue={email}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"              
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <SelectDropdown
              defaultButtonText={"Gender"}
              buttonStyle={styles.dropdownBTNStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              data={sexs}          
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              renderDropdownIcon={() => {
                return (
                  <Icon name="chevron-down" color={"#444"} size={18} />
                );
              }}
              onSelect={(selectedItem, index) => {
                setGender(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
            {/* <TextInput placeholder="Gender" style={styles.textInput5}></TextInput>
            <Icon name="chevron-down" style={styles.icon}/> */}
          </View>
          <View style={styles.Section1Style}>        
            <RadioButton
              animation={'bounceIn'}
              isSelected={ checked === 1 ? true: false}
              innerColor={ checked === 1 ? "#FFBE76": "#E6E6E6"}
              outerColor={ checked === 1 ? "#FFBE76": "#E6E6E6"}
              onPress={() => setChecked(1)}
            />     
            <Text style={styles.iAmABeliever}>I am a believer</Text>        
            <RadioButton
              animation={'bounceIn'}
              isSelected={ checked === 0 ? true : false}
              innerColor={ checked === 0 ? "#FFBE76": "#E6E6E6"}
              outerColor={ checked === 0 ? "#FFBE76": "#E6E6E6"}         
              onPress={() => setChecked(0)}
            />
            <Text style={styles.noneBeliever}>None believer</Text>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setPasswordText(text)}
              defaultValue={password}
              underlineColorAndroid="#f000"
              placeholder="Password"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
              keyboardType="sentences"
              returnKeyType="next"              
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setRepeatPassword(text)}
              defaultValue={repeatPassword}
              underlineColorAndroid="#f000"
              placeholder="Repeat Password"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <View style={styles.SectionStyle}>
            <View style={styles.rectCheckBox}>
              <CheckBox
                  selected={isSelected}
                  onPress={handleCheckBox}
                  textStyle={{fontSize: 8}}
                  text="By checking this box you're allowing
                        us to always use your current location."
                />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Register Now</Text>
          </TouchableOpacity>
          {/* <Text
              style={styles.registerTextStyle}
              onPress={() => props.navigation.replace('LoginScreen')}>
              I am already member, Go to Login
            </Text> */}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
  },
  Section1Style: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonStyle: {
    backgroundColor: 'rgba(26,188,156,1)',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'rgba(26,188,156,1)',
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 40,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  registerTextStyle: {
    color: '#ffbe76',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    padding: 10,
  },
  dropdownBTNStyle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#dadae8',
    width: '100%',
    height: 40,
    backgroundColor: "transparent",
  },
  dropdown1BtnTxtStyle: {   
    color: "rgba(165,177,197,1)",
    textAlign: 'auto'
  },
  dropdown1DropdownStyle: { 
    backgroundColor: "#EFEFEF" 
  },
  dropdown1RowStyle: {
    color: "red",
    borderBottomColor: "#ffbe76",
  },
  dropdown1RowStyle: {
    color: "#444",
  },
  iAmABeliever: {
    //fontFamily: "abeezee-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 15,
    marginLeft: 5,
    marginRight: 30,
    marginTop: 7
  }, 
  noneBeliever: {
    //fontFamily: "abeezee-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 15,
    marginLeft: 5,
    marginTop: 7
  },
  rectCheckBox: {
    height: 50,
    //backgroundColor: "#E6E6E6"
  },
  txtLocation: {
    //fontFamily: "abeezee-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 18,
    marginLeft: 17,
    marginTop: 0
  },
});

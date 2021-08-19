import React from 'react';
import {
  View, 
  StyleSheet, 
  Text,
  TouchableOpacity,
} from 'react-native';

const AuthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../assets/image/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      /> */}
      <Text style={styles.fervent}>Fervent</Text>
      <Text style={styles.textDetail}>
        Please take a moment to send your urgent prayer request to American
        Bible Society.{"\n"}Our prayer team commits to pray together for you.
      </Text>
      <Text
        style={styles.registerTextStyle}
        onPress={() => navigation.navigate('RegisterScreen')}>
        Register Now
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonTextStyle}>Login</Text>
      </TouchableOpacity>          
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ffffff',//'#ffbe76',
    justifyContent: 'center',
    alignContent: 'center',
  },
  fervent: {
    textAlign: "center",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 0,
    height: 100,
  },
  textDetail: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 18,
    marginLeft: 18,
    marginRight: 18,    
    height: 250,
  },
  registerTextStyle: {
    //fontFamily: "abeezee-regular",
    color: '#ffbe76',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    padding: 10,
    marginTop: 25,
  },
  buttonStyle: {    
    backgroundColor: 'rgba(26,188,156,1)',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'rgba(26,188,156,1)',
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20,
    marginBottom: 0,
  },
  buttonTextStyle: {
    //fontFamily: "abeezee-regular",
    color: '#FFFFFF',
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

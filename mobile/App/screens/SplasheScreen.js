// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),        
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome</Text>      
      <Image
        source={require('../assets/image/aboutreact.gif')}
        style={{width: '60%',  height: '30%' ,resizeMode: 'contain'}}
      />
      <ActivityIndicator
        animating={animating}
        color="#ffbe76"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',//'#ffbe76',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  welcome: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

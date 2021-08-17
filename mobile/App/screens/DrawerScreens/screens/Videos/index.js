/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { useState, Component } from 'react';
 import {
   Platform,
   StyleSheet,
   Text,
   TextInput,
   View,  
   ScrollView,
   TouchableOpacity
 } from 'react-native';

 import EntypoIcon from "react-native-vector-icons/Entypo";
 import Icon from "react-native-vector-icons/MaterialCommunityIcons";
 
 import styles from '../../styles/index';
 
 export default class PostProye extends Component{
   render() {
     return (      
        <View style={styles.container}>         
          <ScrollView  contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: 20,
          }}>
            <View style={styles.Section5Style}>
              <Text 
                style={{fontSize: 22, fontWeight: 'bold'}}>
                  #Trending
              </Text>
              
            </View>
          </ScrollView>
        </View>
     );
   }
 }
 
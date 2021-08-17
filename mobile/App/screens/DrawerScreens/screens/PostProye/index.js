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
 
 import CheckBox from '../../../Components/CheckBox';
 import styles from '../../styles/index';
 
 const items = [
   { key: 1, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
 ];
 


 export default class PostProye extends Component{  
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }

  handleCheckBox = () => {
    this.setState({ isSelected : !this.state.isSelected });
  }

   render() {
     return (      
        <View style={styles.container}>         
          <ScrollView  contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 20,
          }}>
            <View style={styles.Section5Style}>
              <Text 
                style={{fontSize: 24}}>
                  Send your prayer request to {"\n"}Christians in your area
              </Text>
              <TextInput 
                style={{
                  borderColor: 'rgba(236,240,241,1)', 
                  borderWidth: 1,
                  placeholderTextColor: 'gray',
                  height: 150,
                  justifyContent: "flex-start",
                  textAlignVertical: 'top',
                  marginTop: 15,
                  padding: 15
                  //
                }}
                numberOfLines={4} 
                multiline={true}
                placeholder="Your Prayer Request..."
              ></TextInput>
              <View style={{marginTop: 20}}>
                <CheckBox
                  selected={this.state.isSelected}
                  onPress={this.handleCheckBox}
                  text='Post as anonymous'
                />
              </View>

              <Text 
                style={{fontSize: 18, marginTop: 15}}>
                  The app will use your location to post your prayer to all the Christians in that area.
              </Text>
            </View>
          </ScrollView>
        </View>
     );
   }
 }
 
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from '../../styles/index';

export default class Prayewall extends Component{ 
  constructor(props) {
      super(props);
      this.state = { paywalls: []};
  }

  componentDidMount() {
    fetch('http://192.168.1.108:8080/api/books', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.status != 0) {
        this.setState({paywalls: responseJson});
      }
    })
  }

  render() {
    const { paywalls } = this.state;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return (
      <View style={styles.container}>
        <ScrollView  contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 20,
        }}>
         
          { paywalls.flatMap( item => {
            let date = new Date(item.created_at);
            let time = date.getHours() + ":" + date.getMinutes();
            let offsetDate = new Date().getDate() - date.getDate();
            let postDate = days[date.getDay()];
            return (
              <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => { 
                this.props.navigation.navigate(
                  'DetailProye', { id: item.id });
              }}>
              <View key= { item.id } style={styles.SectionStyle}>
                <EntypoIcon
                  name="dots-three-horizontal"
                  style={styles.icon4}
                ></EntypoIcon>
                <View style={styles.Section2Style}>
                  <Text style={styles.txtTime}> { time } </Text>
                  <View style={styles.postDateView}>                    
                    <Text style={styles.txtPostDate}> { postDate } </Text>
                    <Text style={styles.txtPostDate}> { offsetDate } days ago </Text>
                  </View>                  
                </View>
                <View style={styles.Section2Style}>                
                  <Text style={styles.contentText}>{ item.content } </Text>
                </View>  
                <View style={styles.Section2Style}>                
                  <Text style={styles.peopleCount}> +3 People Praying</Text>
                </View>                                
              </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

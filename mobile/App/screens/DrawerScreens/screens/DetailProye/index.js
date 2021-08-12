/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import styles from '../../styles/index';
import EntypoIcon from "react-native-vector-icons/Entypo";

const items = [
  { key: 1, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
];
export default class DetailProye extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ScrollView  contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 20,
        }}>
          { items.map( item => {
            return (              
              <View key= { item.key } style={styles.SectionStyle}>
                <EntypoIcon
                  name="dots-three-horizontal"
                  style={styles.icon4}
                ></EntypoIcon>
                <View style={styles.Section2Style}>
                  <Text style={styles.txtTime}> { item.time } </Text>
                  <View style={styles.postDateView}>                    
                    <Text style={styles.txtPostDate}> { item.postDate } </Text>
                  </View>                  
                </View>
                <View style={styles.Section2Style}>                
                  <Text style={styles.contentText}> { item.content } </Text>
                </View>
                <View style={styles.Section3Style}>  
                  <EntypoIcon
                    name="location"
                    style={styles.icon5}
                  ></EntypoIcon>              
                  <Text style={styles.locationText}>Lynn, MA, USA</Text>
                </View>  
                <View style={styles.Section2Style}>                
                  <Text style={styles.peopleCount}> +3 People Praying</Text>
                </View>                                
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Contact')}>
                    <Text style={styles.buttonTextStyle}>I will pray for you</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}


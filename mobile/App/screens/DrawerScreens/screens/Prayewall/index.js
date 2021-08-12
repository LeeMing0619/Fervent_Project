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

import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from '../../styles/index';

const items = [
  { key: 1, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 2, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 3, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 4, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 5, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 6, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 7, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 8, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 9, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 10, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 11, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 12, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 13, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 14, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 15, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
];

export default class Prayewall extends Component{
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
              <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate('DetailProye')}>
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

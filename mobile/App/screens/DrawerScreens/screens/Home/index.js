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
  ScrollView
} from 'react-native';
import styles from '../../styles/index';

const items = [
  { key: 1, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 2, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 3, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 4, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 5, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 6, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 7, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 8, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 9, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 10, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 11, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 12, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 13, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 14, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
  { key: 15, time: '6:30 PM', postDate: 'Monday 5 days ago', content: 'Please take a moment to send{"\n"}your urgent prayer request...', location: 'shenyang, Liaoning'},
];

export default class Home extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { items.map( item => {
            return (
              <View key= { item.key } >
                <Text> { item.time } </Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

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
  constructor(props) {
      super(props);
      this.state = { paywalls: []};
  }
  // componentDidMount() {
  //   console.log("PROPS " + this.props.navigation.state.params.id);
  //   fetch('http://192.168.1.108:8080/api/books/' + this.props.navigation.state.params.id, {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then((responseJson) => {      
  //     if (responseJson.status != 0) {
  //       this.setState({paywalls: responseJson});
  //       console.log(this.state.paywalls);
  //     }
  //   })
  // }

  getDatas = () => {
    fetch('http://192.168.1.108:8080/api/books/' + this.props.navigation.state.params.id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {      
      if (responseJson.status != 0) {
        this.setState({paywalls: responseJson});
        console.log(this.state.paywalls);
      }
    })
  }

  render() { 
    { this.getDatas() } 
    const { paywalls } = this.state;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    let date = new Date(paywalls.created_at);
    let time = date.getHours() + ":" + date.getMinutes();
    let offsetDate = new Date().getDate() - date.getDate();
    let postDate = days[date.getDay()];

    return (
      <View style={styles.container}>
        <ScrollView  contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 20,
        }}>
          {/* { paywalls.map( item => {
            let date = new Date(item.created_at);
            let time = date.getHours() + ":" + date.getMinutes();
            let offsetDate = new Date().getDate() - date.getDate();
            let postDate = days[date.getDay()];
            return (               */}
              <View key= { paywalls.id } style={styles.SectionStyle}>
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
                  <Text style={styles.contentText}>{ paywalls.content } </Text>
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
            {/* )
          })} */}
        </ScrollView>
      </View>
    );
  }
}


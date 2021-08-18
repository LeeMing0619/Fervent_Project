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
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Popover, {PopoverPlacement} from 'react-native-popover-view';

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
        //console.log(this.state.paywalls);
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
        <View style={styles.Section2Style}>
          <Icon
            name="user-circle-o"
            style={styles.icon10}
          ></Icon>
          <MaterialCommunityIconsIcon
            name="chess-king"
            style={styles.icon11}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.gerardM}>Gerard, M</Text>
          <Text style={styles.christian}>Christian</Text>
        </View>
        <ScrollView  contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 20,
        }}>         
          <View key= { paywalls.id } style={styles.SectionStyle}>
            <Popover
              placement={PopoverPlacement.BOTTOM}
              from={(sourceRef, showPopover) => (
                <EntypoIcon
                  name="dots-three-horizontal"
                  style={styles.icon4}
                  onPress={showPopover}
                ></EntypoIcon>
              )}>
              <View style={{flexDirection: 'column', justifyContent:"center", alignContent: 'center', width: 150, height: 100}}>
                <Text style={{borderBottomWidth: 0.2, textAlign: 'center', padding: 12, fontSize: 14}}><Icon name="assistive-listening-systems" style={{fontSize: 20, color: 'rgba(26,188,156,1)'}}/> Listen</Text>                    
                <Text style={{textAlign: 'center', padding: 12, fontSize: 14}}><Icon name="volume-control-phone" style={{fontSize: 20, color: 'rgba(26,188,156,1)'}}/> Report</Text>
              </View>
            </Popover>
            <View style={styles.Section2Style}>
              <View
                style={styles.viewDayStyle}
                activeOpacity={0.5}
                onPress={this.handleInProgressButton}>
                <Text style={styles.txtPostDate}>{ offsetDate } days ago</Text>
              </View>                 
            </View>
            <View style={styles.Section2Style}>                
              <Text style={styles.contentText}>{ paywalls.content } </Text>
            </View>
            <View style={styles.Section2Style}>
              <Icon name="user-circle-o" style={styles.icon9}></Icon>
              <Icon name="user-circle-o" style={styles.icon9}></Icon>
              <Icon name="user-circle-o" style={styles.icon9}></Icon>
              <Text style={styles.peopleCount1}> +55 Praying</Text>
            </View> 
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate('Contact')}>
            <Text style={styles.buttonTextStyle}>I will pray for you</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


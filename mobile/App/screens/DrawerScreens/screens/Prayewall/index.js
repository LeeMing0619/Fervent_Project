import React, { Component, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Popover, {PopoverPlacement} from 'react-native-popover-view';
import SlidingModal from '../../components/SlidingModal';

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from '../../styles/index';

export default class Prayewall extends Component{ 
  constructor(props) {
      super(props);
      this.state = { visible: false, paywalls: []};
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
      //console.log(responseJson);
      if (responseJson.status != 0) {
        this.setState({paywalls: responseJson});
      }
    })
  }

  handleInProgressButton = () => {

  }

  handleCompletedButton = () => {

  }

  handleVisible = (show) => {
    this.setState({visible: show});
  }

  render() {
    const { paywalls } = this.state;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return (
      <View style={styles.container}>
        <View style={styles.Section2Style}>
          <TouchableOpacity
            style={styles.buttonInProgressStyle}
            activeOpacity={0.5}
            onPress={this.handleInProgressButton}>
            <Text style={styles.buttonInprogressTextStyle}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCompletedStyle}
            activeOpacity={0.5}
            onPress={this.handleCompletedButton}>
            <Text style={styles.buttonCompletedTextStyle}>Completed</Text>
          </TouchableOpacity>
        </View>
        <ScrollView  contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 10,
          marginBottom: 20
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
                  {/* <Text style={styles.txtTime}> { time } </Text>
                    <View style={styles.postDateView}>                    
                    <Text style={styles.txtPostDate}> { postDate } </Text>
                    <Text style={styles.txtPostDate}> { offsetDate } days ago </Text>
                  </View>                   */}
                </View>
                <View style={styles.Section2Style}>                
                  <Text numberOfLines={1} style={styles.contentText}>{ item.content } </Text>
                </View>  
                <View style={styles.Section2Style}>
                  <Icon name="user-circle-o" style={styles.icon9}></Icon>
                  <Icon name="user-circle-o" style={styles.icon9}></Icon>
                  <Icon name="user-circle-o" style={styles.icon9}></Icon>
                  <Text style={styles.peopleCount1} onPress={() => {this.handleVisible(true)} }> +5 Praying</Text>
                </View>                                
              </View>
            </TouchableOpacity>
            )
          })}
        </ScrollView>

        {/* SHow Modal */}
        <SlidingModal
          isVisible={this.state.visible}
        >
          <View style={{ height: 350, width:  400, justifyContent: 'center', alignContent: 'center', backgroundColor: '#ebeef2' }}>
            <ScrollView  contentContainerStyle={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 10,
              marginBottom: 20
            }}>
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
            </ScrollView>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle1}
            activeOpacity={0.5}
            onPress={() => {this.handleVisible(false)}}>
              <Text style={styles.buttonTextStyle}>Close</Text>
          </TouchableOpacity>
        </SlidingModal> 
      </View>
     
    );
  }
}

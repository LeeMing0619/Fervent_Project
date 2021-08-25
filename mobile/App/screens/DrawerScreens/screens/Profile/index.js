import React, { Component } from 'react';
import {
  Text,
  View,  
  ScrollView,
  TouchableOpacity
} from 'react-native';

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from '../../styles/index';

const items = [
  { key: 1, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
];

export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = { colorId:0 };
  }

  handleInProgressButton = () => {
    this.setState({colorId: 0});
  }

  handlePrayingButton = () => {
    this.setState({colorId: 1});
  }

  handleCompletedButton = () => {
    this.setState({colorId: 2});
  }

  handleAnswered = () => {
    console.log('----------');
  }

  render() {
    return (      
      <View style={styles.container}>
        <View style={styles.containerHeader}>          
          <View style={styles.containerHeader1}>          
            <View style={styles.profileImage}>
              <View style={styles.profileImage1}>
                <Icon
                  name="chess-king"
                  style={styles.icon7}
                ></Icon>
              </View>  
            </View>
            <Text style={styles.nameText}>Gerard Kasemba</Text>
            <View style={styles.profileLocation}>  
              <EntypoIcon
                name="location"
                style={styles.icon6}
              ></EntypoIcon>              
              <Text style={styles.locationText1}>Lynn, MA, USA</Text>
            </View>
          </View>
        </View>
        <View style={styles.viewTotal}>                        
          <TouchableOpacity
            style={this.state.colorId === 0 ? styles.buttonInProgressStyle1 : styles.buttonCompletedStyle1}
            activeOpacity={0.5}
            onPress={this.handleInProgressButton}>
            <Text style={this.state.colorId === 0 ? styles.buttonRequestTextStyle : styles.buttonRequestTextStyle1}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.colorId === 1 ? styles.buttonInProgressStyle1 : styles.buttonCompletedStyle1}
            activeOpacity={0.5}
            onPress={this.handlePrayingButton}>
            <Text style={this.state.colorId === 1 ? styles.buttonPrayingTextStyle1 : styles.buttonPrayingTextStyle}>Praying</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.colorId === 2 ? styles.buttonInProgressStyle1 : styles.buttonCompletedStyle1}
            activeOpacity={0.5}
            onPress={this.handleCompletedButton}>
            <Text style={this.state.colorId === 2 ? styles.buttonCompletedTextStyle1 : styles.buttonCompletedTextStyle}>Completed</Text>
          </TouchableOpacity>
        </View> 
        <ScrollView  contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 0,
        }}>
          { items.map( item => {
            if (this.state.colorId === 2)
              return (
                <View key= { item.key } style={styles.SectionStyle}>
                <View style={{
                  borderRadius: 10,
                  // To round image corners
                  overflow: 'hidden',
                  borderColor: '#d8e5f5',
                  //borderWidth: 0.1,
                  // https://github.com/facebook/react-native/issues/10049#issuecomment-366426897
                  backgroundColor: '#FFF',                  
                  // Android shadow
                  paddingBottom: 10,
                  elevation: 10}}>    
                <View style={styles.Section2Style}>
                  <View
                    style={styles.viewDayStyle}
                    activeOpacity={0.5}
                    onPress={this.handleAnswered}>
                    <Text style={styles.txtPostDate}>5 days ago</Text>
                  </View>
                  <EntypoIcon
                    name="dots-three-horizontal"
                    style={styles.icon4}
                  ></EntypoIcon>
                </View>
                <View style={styles.Section2Style}>                
                  <Text numberOfLines={1} style={styles.contentText}>{ item.content } </Text>
                </View>  
                <View style={{flexDirection:'row', justifyContent: 'center'}}>             
                <TouchableOpacity
                     activeOpacity={0.5}
                     onPress={() => this.props.navigation.navigate('Contact')}>
                  <View style={styles.Section4Style}> 
                      <EntypoIcon
                        name="video-camera"
                        style={styles.icon8}
                      ></EntypoIcon>
                      <Text style={styles.watchTest}> Testimony</Text>
                  </View>
                 </TouchableOpacity>    
                 </View>   
                 </View>                           
              </View>
              )
            else
            return (                            
              <View key= { item.key } style={styles.SectionStyle}>
                <View style={{
                  borderRadius: 10,
                  // To round image corners
                  overflow: 'hidden',
                  borderColor: '#d8e5f5',
                  //borderWidth: 0.1,
                  // https://github.com/facebook/react-native/issues/10049#issuecomment-366426897
                  backgroundColor: '#FFF',                  
                  // Android shadow
                  paddingBottom: 10,
                  elevation: 10}}>   
                <View style={styles.Section2Style}>
                  <View
                    style={styles.viewDayStyle}
                    activeOpacity={0.5}
                    onPress={this.handleAnswered}>
                    <Text style={styles.txtPostDate}>5 days ago</Text>
                  </View>
                  <EntypoIcon
                    name="dots-three-horizontal"
                    style={styles.icon4}
                  ></EntypoIcon>
                </View>
                <View style={styles.Section2Style}>                
                  <Text numberOfLines={1} style={styles.contentText}>{ item.content } </Text>
                </View>  
                <View style={styles.Section2Style}>
                  <View style={{flexDirection: 'row'}}>
                  <IconFontAwesome name="user-circle-o" style={styles.icon9}></IconFontAwesome>
                  <IconFontAwesome name="user-circle-o" style={styles.icon9}></IconFontAwesome>
                  <IconFontAwesome name="user-circle-o" style={styles.icon9}></IconFontAwesome>
                  </View>
                  <Text style={styles.peopleCount1}> +5 Praying</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  onPress={() => this.props.navigation.navigate('Contact')}>
                    <Text style={styles.buttonTextStyle}>Answered</Text>
                </TouchableOpacity>                                
              </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

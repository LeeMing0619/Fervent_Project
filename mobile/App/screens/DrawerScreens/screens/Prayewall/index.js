import React, { Component, useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Popover, {PopoverPlacement} from 'react-native-popover-view';

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from '../../styles/index';
import Modal from '../../components/SlidingModal';

const win = Dimensions.get('window');
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

  renderModalContent = () => {
    return(
      <View style={{ height: win.height - 300, justifyContent: 'center', alignContent: 'center', }}>
      <ScrollView  contentContainerStyle={{flexGrow: 1,
      }}>
      <View style={styles.Section2Style1}>
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
      <View style={styles.Section2Style1}>
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
      <View style={styles.Section2Style1}>
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
      <View style={styles.Section2Style1}>
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
      <View style={styles.Section2Style1}>
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
      <View style={styles.Section2Style1}>
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
    );
  }

  render() {
    const { paywalls } = this.state;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return (
      <View style={styles.container}>
        <View style={styles.Section1Style}>
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
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
         
          { paywalls.flatMap( item => {
            let date = new Date(item.created_at);            
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
                    onPress={this.handleInProgressButton}>
                    <Text style={styles.txtPostDate}>{ offsetDate } days ago</Text>
                  </View>
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
                </View>
                <View style={styles.Section2Style}>                
                  <Text numberOfLines={1} style={styles.contentText}>{ item.content } </Text>
                </View>  
                <View style={styles.Section2Style}>
                  <View style={{flexDirection: 'row',}}>
                  <Icon name="user-circle-o" style={styles.icon9}></Icon>
                  <Icon name="user-circle-o" style={styles.icon9}></Icon>
                  <Icon name="user-circle-o" style={styles.icon9}></Icon>
                  </View>
                  <Text style={styles.peopleCount1} onPress={() => {this.handleVisible(true)} }> 5 Praying</Text>
                </View>                                
              </View>
              </View>            
            </TouchableOpacity>
            )
          })}
        </ScrollView>

        {/* SHow Modal */}
        <Modal
          show={this.state.visible}
          closeCallback={() => {this.handleVisible(false)}}
          top={250}
          fullScreenCallback={() => {}}          
         >
           <Modal.Header>
              <Text>
                {/* Header Title */}
              </Text>
            </Modal.Header>
          {this.renderModalContent()}
          
        </Modal>
      </View>
     
    );
  }
}

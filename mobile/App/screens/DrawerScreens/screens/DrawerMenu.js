import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import styles from '../styles/index';

import EntypoIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const items = [
  { key: 1, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
];
class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View style={styles.container}>
         <View style={styles.containerHeader2}>          
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
         <ScrollView  contentContainerStyle={{
           justifyContent: 'center',
           alignContent: 'center',
           marginTop: 20,
         }}>
           <View>
            <ScrollView>
              <View>
                <View style={styles.menuItemHeader}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}} onPress={this.navigateToScreen('Prayewall')}>
                    Title
                  </Text>
                </View>
                <View style={styles.menuItem}>
                  <EntypoIcon
                    name="home"
                    style={{fontSize: 18, marginRight: 10, color: '#ffbe76'}}
                  ></EntypoIcon>
                  <Text style={{color: '#ffbe76'}} onPress={this.navigateToScreen('Prayewall')}>
                    Prayewall
                  </Text>
                </View>
                <View style={styles.menuItem}>
                  <EntypoIcon
                    name="user"
                    style={{fontSize: 18, marginRight: 10, color: '#ffbe76'}}
                  ></EntypoIcon>
                  <Text style={{color: '#ffbe76'}} onPress={this.navigateToScreen('Profile')}>
                  Userprofile 
                  </Text>
                </View>
                <View style={styles.menuItem}>
                  <EntypoIcon
                    name="notification"
                    style={{fontSize: 18, marginRight: 10, color: '#ffbe76'}}
                  ></EntypoIcon>
                  <Text style={{color: '#ffbe76'}} onPress={this.navigateToScreen('PostProye')}>
                  PostPrayer 
                  </Text>
                </View>

                <View style={styles.menuItemHeaderSetting}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}} onPress={this.navigateToScreen('Prayewall')}>
                    Setting
                  </Text>
                </View>
                <View style={styles.menuItem}>
                  <EntypoIcon
                    name="log-out"
                    style={{fontSize: 18, marginRight: 10, color: '#ffbe76'}}
                  ></EntypoIcon>
                  <Text style={{color: '#ffbe76'}} onPress={this.navigateToScreen('PostProye')}>
                  Log out 
                  </Text>
                </View>
              </View>
            </ScrollView>
           </View>
         </ScrollView>
       </View>      
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
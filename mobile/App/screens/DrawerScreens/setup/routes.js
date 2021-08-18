import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { Badge } from 'react-native-elements';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SvgUri from 'react-native-svg-uri';
import styles from '../styles/index';

import DrawerMenu from '../screens/DrawerMenu';
import Login from '../../LoginScreen';
import Videos from '../screens/Videos';
import VideoDetail from '../screens/VideoDetail'
import BottomTabNavigator from '../components/BottomTab';
import Prayewall from '../screens/Prayewall/index';
import Profile from '../screens/Profile/index';
import PostProye from '../screens/PostProye/index';
import DetailProye from '../screens/DetailProye';

// const Tabs = BottomTabNavigator({
//     Home: Home,
//     About: About,
//     Contact: Contact,
//     Settings: { screen: Settings, navigationOptions: { tabBarTestID: 'hidden', } }, 
// })

const DrawerNavigator = createDrawerNavigator({
    Prayewall:{
        screen: Prayewall,
    },
    Profile:{
        screen: Profile,
    },
    PostProye:{ 
        screen: PostProye,
    },
    DetailProye: {
        screen: DetailProye,
    },
    Videos: {
        screen: Videos,
    },
    VideoDetail: {
        screen: VideoDetail,
    },
    Logout: {
        screen: Login,
    }
},{
    
    
    initialRouteName: 'Prayewall',
    contentComponent: DrawerMenu,    
    drawerWidth: '75%',
    // contentOptions: {
    //     // add your styling here 
    //     activeTintColor: '#e91e63',
    //     itemsContainerStyle: {
    //         marginVertical: 0,
    //     },
    //     iconContainerStyle: {
    //         opacity: 1,
    //     },
    // },
 // drawerBackgroundColor: '#262A2C',
});

const MenuImage = ({navigation}) => navigation.state.isDrawerOpen ?
        <FontAwesomeIcon name="exchange" style={navigation.state.index == 1 ? styles.iconMenu1: styles.iconMenu}></FontAwesomeIcon>://<SvgUri width="25" height="25" style={{backgroundColor: 'white'}} source={require('../../../assets/image/left-arrow.svg')} />:
        <FontAwesomeIcon name="navicon" style={navigation.state.index == 1 ? styles.iconMenu1: styles.iconMenu}></FontAwesomeIcon>//<SvgUri width="25" height="25" source={require('../../../assets/image/menu.svg')} />;

const MenuRightImage = ({navigation}) => 
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.menuRightButton} onPress={() => {navigation.navigate('ShowProye')} }>
                <Icon name="notifications-active"
                    style={navigation.state.index == 1 ? styles.iconAlarm1: styles.iconAlarm}
                ></Icon>
                <Badge value='8' textStyle={{color: 'white'}} badgeStyle={{backgroundColor: 'red'}} containerStyle={{ backgroundColor: 'transparent', position: 'absolute', top: -4, right: 2 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuRightButton} onPress={() => {navigation.navigate('PostProye')} }>
                <IoniconsIcon name="ios-add-circle"
                    style={navigation.state.index == 1 ? styles.iconPlus1: styles.iconPlus}            
                ></IoniconsIcon>
            </TouchableOpacity>
        </View>
        

const defaultNavigationOptions = ({ navigation }) => ({
  title: 'Fervent',
  headerStyle: navigation.state.index == 1 ? styles.headerStyle1 : styles.headerStyle,
  headerTitleStyle: navigation.state.index == 1 ? styles.headerTitleStyle1 : styles.headerTitleStyle,
  headerLeft:
        <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <MenuImage navigation={navigation}/>
        </TouchableOpacity>,
  headerRight:        
            <MenuRightImage navigation={navigation}/>            
 
        
})

const StackNavigator = createStackNavigator({
    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{ defaultNavigationOptions });

let Navigation = createAppContainer(StackNavigator);

export default () => <Navigation theme="light" />;

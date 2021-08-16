import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { Badge } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";

import SvgUri from 'react-native-svg-uri';
import styles from '../styles/index';

import DrawerMenu from '../screens/DrawerMenu';
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
      <SvgUri width="25" height="25" source={require('../../../assets/image/left-arrow.svg')} />:
      <SvgUri width="25" height="25" source={require('../../../assets/image/menu.svg')} />;

const MenuRightImage = ({navigation}) => 
      <SvgUri width="30" height="30" source={require('../../../assets/image/notification.svg')} />;

const defaultNavigationOptions = ({ navigation }) => ({
  title: 'Fervent',
  headerStyle: styles.headerStyle,
  headerTitleStyle: styles.headerTitleStyle,
  headerLeft:
        <TouchableOpacity style={styles.menuButton} onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <MenuImage navigation={navigation}/>
        </TouchableOpacity>,
  headerRight:
        <TouchableOpacity style={styles.menuRightButton} onPress={() => {navigation.navigate('DetailProye')} }>
            <MenuRightImage navigation={navigation}/>
            <Badge value='8' textStyle={{color: 'white'}} badgeStyle={{backgroundColor: 'red'}} containerStyle={{ backgroundColor: 'transparent', position: 'absolute', top: -4, right: 1 }} />
        </TouchableOpacity>, 
        
})

const StackNavigator = createStackNavigator({
    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{ defaultNavigationOptions  });

let Navigation = createAppContainer(StackNavigator);

export default () => <Navigation theme="light" />;

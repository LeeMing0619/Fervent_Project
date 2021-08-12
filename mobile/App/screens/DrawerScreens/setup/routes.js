import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import SvgUri from 'react-native-svg-uri';
import styles from '../styles/index';

import DrawerMenu from '../screens/DrawerMenu';
import BottomTabNavigator from '../components/BottomTab';
import Home from '../screens/Home/index';
import About from '../screens/About/index';
import Contact from '../screens/Contact/index';
import Settings from '../screens/Settings/index';

// const Tabs = BottomTabNavigator({
//     Home: Home,
//     About: About,
//     Contact: Contact,
//     Settings: { screen: Settings, navigationOptions: { tabBarTestID: 'hidden', } }, 
// })

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Home,
    },
    About:{
        screen: About,
    },
    Contact:{
        screen: Contact,
    }
},{
    initialRouteName: 'Home',
    contentComponent: DrawerMenu,
    drawerWidth: 300
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
        <TouchableOpacity style={styles.menuRightButton} onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <MenuRightImage navigation={navigation}/>
        </TouchableOpacity>,
})

const StackNavigator = createStackNavigator({
    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{ defaultNavigationOptions });

let Navigation = createAppContainer(StackNavigator);

export default () => <Navigation theme="light" />;

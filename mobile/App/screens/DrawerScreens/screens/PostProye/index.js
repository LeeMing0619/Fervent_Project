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
 import EntypoIcon from "react-native-vector-icons/Entypo";
 import Icon from "react-native-vector-icons/MaterialCommunityIcons";
 
 import styles from '../../styles/index';
 
 const items = [
   { key: 1, time: '6:30 PM', postDate: 'Monday \n5 days ago', content: 'Please take a moment to send your urgent prayer request...', location: 'shenyang, Liaoning'},
 ];
 
 export default class PostProye extends Component{
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
             <View style={styles.viewTotal}>                        
               <Text style={styles.prayer1}>1K {"\n"} Prayers</Text>
               <Text style={styles.prayer2}>1K {"\n"} Praying</Text>
               <Text style={styles.prayer3}>1K {"\n"} Completed</Text>
             </View> 
           </View>
         </View>
         <ScrollView  contentContainerStyle={{
           justifyContent: 'center',
           alignContent: 'center',
           marginTop: 20,
         }}>
           { items.map( item => {
             return (              
               <View key= { item.key } style={styles.SectionStyle}>
                 <EntypoIcon
                   name="dots-three-horizontal"
                   style={styles.icon4}
                 ></EntypoIcon>
                 <View style={styles.Section2Style}>
                   <Text style={styles.txtTime}> { item.time } </Text>
                   <View style={styles.postDateView}>                    
                     <Text style={styles.txtPostDate}> { item.postDate } </Text>
                   </View>                  
                 </View>
                 <View style={styles.Section2Style}>                
                   <Text style={styles.contentText}> { item.content } </Text>
                 </View>
                 <TouchableOpacity
                     activeOpacity={0.5}
                     onPress={() => this.props.navigation.navigate('Contact')}>
                  <View style={styles.Section4Style}> 
                      <EntypoIcon
                        name="video-camera"
                        style={styles.icon8}
                      ></EntypoIcon>
                      <Text style={styles.watchTest}> Watch testimony</Text>
                  </View>
                 </TouchableOpacity>
               </View>
             )
           })}
         </ScrollView>
       </View>
     );
   }
 }
 
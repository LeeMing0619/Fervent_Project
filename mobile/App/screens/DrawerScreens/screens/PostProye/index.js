/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   Text,
   TextInput,
   View,  
   ScrollView,
   TouchableOpacity
 } from 'react-native';

 import MultiSelect from 'react-native-multiple-select';
 
 import CheckBox from '../../../Components/CheckBox';
 import styles from '../../styles/index';
 
 const items = [{
      id: '1',
      name: 'Pst.Vick'
    }, {
      id: '2',
      name: 'Pst.Vick1'
    }, {
      id: '3',
      name: 'Pst.Vick2'
    }, {
      id: '4',
      name: 'Pst.Vick3'
    }
 ];

 export default class PostProye extends Component{  
  constructor(props) {
    super(props);
    this.state = { isSelected: false, selectedItems : [] };
  }

  handleCheckBox = () => {
    this.setState({ isSelected : !this.state.isSelected });
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

   render() {
    const { selectedItems } = this.state;

     return (      
        <View style={styles.container}>         
          <ScrollView  contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
            marginBottom: 20,
          }}>
            <View style={styles.Section5Style}>
              <Text 
                style={{fontSize: 24}}>
                  Send your prayer request to {"\n"}Christians in your area
              </Text>
              <TextInput 
                style={{
                  borderColor: 'rgba(236,240,241,1)', 
                  borderWidth: 1,
                  placeholderTextColor: 'gray',
                  height: 100,
                  justifyContent: "flex-start",
                  textAlignVertical: 'top',
                  marginTop: 15,
                  padding: 15
                  //
                }}
                numberOfLines={4} 
                multiline={true}
                placeholder="Your Prayer Request..."
              ></TextInput>
              <View style={{marginTop: 20,marginBottom: 20}}>
                <CheckBox
                  selected={this.state.isSelected}
                  onPress={this.handleCheckBox}
                  text='Post as anonymous'
                />
              </View>
              <MultiSelect
                hideTags
                hideDropdown
                items={items}
                uniqueKey="id"
                styleDropdownMenuSubsection={{borderWidth: 0.8, height: 45, paddingLeft: 15}}
                styleInputGroup={{borderWidth: 0.2, height: 45,}}
                styleRowList={{padding: 10, backgroundColor: '#fff'}}
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={this.onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Tag interesors (Optional)"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={ (text)=> console.log(text)}   
                textInputProps={{ autoFocus: false }}             
                tagRemoveIconColor="rgba(243,156,18,1)"
                tagBorderColor="rgba(243,156,18,0.2)"
                tagTextColor="#121212"
                tagContainerStyle={{backgroundColor: 'rgba(243,156,18, 0.2)', borderRadius: 5, }}
                selectedItemTextColor="rgba(243,156,18,1)"
                selectedItemIconColor="rgba(243,156,18,1)"
                itemTextColor="#000"
                itemFontSize={16}
                displayKey="name"
                fontSize={16}
                itemFontSize={16}
                submitButtonColor="rgba(26,188,156,1)"
                submitButtonText="Confirm"
              />
              <View>
                {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
              </View>
              <Text 
                style={{fontSize: 18, marginTop: 15, marginBottom: 40}}>
                  The app will use your location to post your prayer to all the Christians in that area.
              </Text>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Contact')}>
                  <Text style={styles.buttonTextStyle}>Answered</Text>
              </TouchableOpacity> 
            </View>
          </ScrollView>
        </View>
     );
   }
 }
 
import React from 'react'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { TouchableOpacity, Text } from 'react-native'

const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#ffbe76', text = '', ...props}) => (
    <TouchableOpacity style={styles.checkBox} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={selected ? color : '#E6E6E6'}
            name={ selected ? 'check-box' : 'check-box-outline-blank'}
        />

        <Text style={styles.txtRememberMe}> {text} </Text>
    </TouchableOpacity>
)

export default CheckBox 

const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300
    },
    txtRememberMe: {
        //fontFamily: "abeezee-regular",
        color: "rgba(155,155,155,1)",
        fontSize: 16.5,
        marginLeft: 10
      },
})
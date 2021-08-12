import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    menuButton:{
        paddingLeft: 15
    },
    menuRightButton: {
        paddingRight: 15,
    },
    headerStyle:{
        textAlign: 'center',
        backgroundColor: '#ffbe76'
    },
    headerTitleStyle: {       
        left: -5 , 
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#fff'
    },
    SectionStyle: {
        flexDirection: 'column',
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    Section2Style: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
    },
    Section3Style: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
    },
    Section4Style: { 
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 20
    },
    txtTime: {
        color: "#121212",
        fontSize: 14
    },
    postDateView: {
        width: '88%',
        flexDirection: 'row', justifyContent: 'flex-end'
    },
    txtPostDate: {     
        width: 100,
        textAlign: 'right',
    },
    contentText: {
        fontSize: 18
    },
    icon4: {
        marginRight: 0,
        marginLeft: '95%',
        color: "rgba(0,0,0,1)"
    },
    icon5: {
        color: "rgba(155,155,155,1)",
        fontSize: 20
    },
    icon6: {
        color: "rgba(255,255,255,1)",
        fontSize: 20
    },
    icon7: {
        color: "rgba(230, 220, 9,1)",
        marginLeft: 70,
        fontSize: 30
    },
    icon8: {
        color: "rgba(242, 130, 2,1)",
        fontSize: 30
    },
    locationText: {
        color: "rgba(155,155,155,1)",
        fontSize: 15,
        marginLeft: 10,
        marginTop: 4
    },
    locationText1: {
        color: "rgba(255,255,255,1)",
    },
    peopleCount: {
        width: 200,       
        marginLeft: '70%',
        color: '#f28102'
    },
    people2Count: {
        width: 200,       
        marginTop: 5,
        marginLeft: '20%',
        fontSize: 18,
        color: '#f28102'
    },
    buttonStyle: {
        backgroundColor: '#ffbe76',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 50,
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 50,
        marginBottom: 25,
    },
    button40Style: {
        backgroundColor: '#ffbe76',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        width: '40%',
        borderRadius: 8,        
        marginBottom: 25,
    },
    buttonText40Style: {
        fontFamily: "abeezee-regular",
        color: '#FFFFFF',
        paddingVertical: 8,
        fontSize: 16,
    },
    buttonTextStyle: {
        fontFamily: "abeezee-regular",
        color: '#FFFFFF',
        paddingVertical: 11,
        fontSize: 20,
    },
    containerHeader: {        
        height: 300,
        backgroundColor: "rgba(255,190,118,1)",
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    containerHeader1: {
        flexDirection: 'column',
    },
    profileImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 3, 
    },
    profileImage1: {
        width: 100,
        height: 100,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        marginTop: 50,
        marginLeft: 3, 
    },
    nameText: {
        marginTop: 10,
        textAlign: 'center'
    },
    profileLocation: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8
    },
    viewTotal: {
        flexDirection: 'row',
        marginTop: 40
    }, 
    prayer1: {
        color: '#ffffff',
        textAlign: 'center',
        width: '33%'
    },
    prayer2: {
        textAlign: 'center',
        width: '33%'
    },
    prayer3: {
        textAlign: 'center',
        width: '33%'
    },
    watchTest: {
        color: '#ffbe76',
        fontSize: 20
    },    
});
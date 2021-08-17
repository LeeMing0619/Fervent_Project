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
        flexDirection: 'row',
        paddingLeft: 40,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#d6d7da'
    },
    menuButton:{
        paddingLeft: 15
    },
    menuRightButton: {
        paddingRight: 15,
    },
    menuItemHeader: {
        marginTop: 10,
        marginLeft: 20,
        paddingBottom: 15,
        marginRight: 20,
        marginBottom: 10,
        borderBottomWidth: 0.2,
    },
    menuItemHeaderSetting: {
        marginTop: 30,
        marginLeft: 20,
        paddingBottom: 15,
        marginRight: 20,
        marginBottom: 8,
        borderBottomWidth: 0.2,
    },
    headerStyle:{
        //textAlign: 'center',
        //height: 60,
        backgroundColor: '#ffffff',//#ffbe76',
        //backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerStyle1: {
        backgroundColor: 'rgba(26,188,156,1)',//#ffbe76',
        //backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
    },
    headerTitleStyle: {       
        left: -5 , 
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '100',
        color:'#000'
    },
    headerTitleStyle1: {       
        left: -5 , 
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '100',
        color:'#fff'
    },
    SectionStyle: {
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "rgba(236,240,241,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 1,
        shadowOpacity: 1,
        shadowRadius: 5,
        padding: 10
    },
    Section2Style: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },
    Section3Style: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25,
    },
    Section4Style: { 
        flexDirection: 'row',
        marginLeft: '60%',
        marginTop: 20,
        height: 50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "rgba(243,156,18,0.2)",
    },
    Section5Style: {
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    txtTime: {
        color: "#121212",
        fontSize: 14
    },
    postDateView: {
        marginLeft: '64%',
        flexDirection: 'column',
    },
    txtPostDate: {     
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 3,
        color: "rgba(26,188,156,1)"
    },
    contentText: {
        fontSize: 20,
        borderLeftWidth: 5,
        borderLeftColor: "rgba(26,188,156,1)",
        paddingLeft: 15,
    },
    iconMenu: {
        fontSize: 28,
        color: "rgba(0,0,0,1)",
    },
    iconMenu1: {
        fontSize: 30,
        color: "rgba(255,255,255,1)",
    },
    iconAlarm: {
        fontSize: 30,
        color: "rgba(0,0,0,1)",
    },
    iconAlarm1: {
        fontSize: 30,
        color: "rgba(255,255,255,1)",
    },
    iconPlus: {
        marginRight: -10,
        marginLeft: 0,
        fontSize: 30,
        color: "rgba(0,0,0,1)",
    },
    iconPlus1: {
        marginRight: -10,
        marginLeft: 0,
        fontSize: 30,
        color: "rgba(255,255,255,1)",
    },
    icon4: {
        marginRight: 0,
        marginLeft: '92%',
        color: "rgba(0,0,0,1)",
        fontSize: 26
    },
    icon9: {
        marginRight: 2,
        color: "rgba(128,128,128,1)",
        fontSize: 24
    },
    icon10: {
        marginRight: 2,
        color: "rgba(128,128,128,1)",
        fontSize: 50
    },
    icon11: {
        color: "rgba(241,196,15,1)",
        fontSize: 20,
        marginTop: -8,
        marginLeft: -12
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
        marginTop: -20,
        marginLeft: 43,
        fontSize: 30
    },
    icon8: {
        color: "rgba(242, 130, 2,1)",
        fontSize: 30
    },
    gerardM: {
        fontSize: 17,
        color: "#121212",
        marginTop: 8,
    },
    christian: {
        color: "#121212",
        fontSize: 12,
        marginTop: 28,
        marginLeft: -72
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
        //marginLeft: '70%',
        fontSize: 15,
        color: 'rgba(255,190,118,1)'
    },
    peopleCount1: {
        width: 109,    
        height: 30,
        backgroundColor: "rgba(243,156,18,0.2)",
        borderRadius: 5,        
        marginLeft: '48%',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(243,156,18,1)'
    },
    people2Count: {
        width: 200,       
        marginTop: 5,
        marginLeft: '20%',
        fontSize: 18,
        color: '#f28102'
    },
    viewDayStyle: {
        backgroundColor: "rgba(46,204,113,1)",
        borderRadius: 5,
        opacity: 0.27,
        width: 116,
        height: 30
    },
    buttonInProgressStyle: {
        backgroundColor: "rgba(26,188,156,1)",
        borderWidth: 1,
        borderColor: "rgba(236,240,241,1)",
        shadowColor: "rgba(26,188,156,1)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        height: 31,
        width: 95,
        elevation: 5,
        shadowOpacity: 0.06,
        shadowRadius: 5,
        borderRadius: 5,
        marginLeft: 0,
        marginRight: 12,
        marginTop: 17,
        marginBottom: 25,
    },
    buttonInProgressStyle1: {
        backgroundColor: "rgba(26,188,156,1)",
        borderWidth: 1,
        borderColor: "rgba(236,240,241,1)",
        shadowColor: "rgba(26,188,156,1)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        height: 31,
        width: 95,
        elevation: 5,
        shadowOpacity: 0.06,
        shadowRadius: 5,
        borderRadius: 5,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 17,
        marginBottom: 25,
    },
    buttonInprogressTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 2,
        paddingHorizontal: 5,
        fontSize: 16,
    },
    buttonRequestTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 2,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    buttonRequestTextStyle1: {
        color: '#000',
        paddingVertical: 2,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    buttonCompletedStyle: {
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 0.5,
        borderColor: "rgba(236,240,241,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        height: 28,
        width: 95,
        elevation: 5,
        shadowOpacity: 0.06,
        shadowRadius: 5,
        borderRadius: 5,
        marginTop: 18,
        marginBottom: 25,
    },
    buttonCompletedTextStyle: {
        color: '#000',
        paddingVertical: 2,
        paddingHorizontal: 7,
        fontSize: 16,
    },
    buttonCompletedTextStyle1: {
        color: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 7,
        fontSize: 16,
    },
    buttonPrayingTextStyle: {
        color: '#000',
        paddingVertical: 2,
        paddingHorizontal: 20,
        fontSize: 16,
    },
    buttonPrayingTextStyle1: {
        color: '#fff',
        paddingVertical: 2,
        paddingHorizontal: 20,
        fontSize: 16,
    },
    buttonStyle: {
        backgroundColor: 'rgba(26,188,156,1)',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: 'rgba(26,188,156,1)',
        height: 50,
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
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
        //fontFamily: "abeezee-regular",
        color: '#FFFFFF',
        paddingVertical: 8,
        fontSize: 16,
    },
    buttonTextStyle: {
        //fontFamily: "abeezee-regular",
        color: '#FFFFFF',
        paddingVertical: 11,
        fontSize: 20,
    },
    containerHeader: {        
        height: 200,
        backgroundColor: "rgba(26,188,156,1)",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    containerHeader2: {        
        height: 200,
        backgroundColor: "rgba(26,188,156,1)",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    containerHeader1: {
        marginTop: -15,
        flexDirection: 'column',
    },
    profileImage: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 23, 
    },
    profileImage1: {
        width: 70,
        height: 73,
        backgroundColor: '#E6E6E6',
        marginTop: 50,
        marginLeft: 3, 
    },
    nameText: {
        marginTop: 10,
        marginLeft: 25,
        textAlign: 'left',
        fontSize: 18,
        color: 'white'
    },
    profileLocation: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 8,
        marginLeft: 25,
    },
    viewTotal: {
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        color: 'rgba(243,156,18,1)',
        fontSize: 20,
        fontWeight:'bold'
    },    
});
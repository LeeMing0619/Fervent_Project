 import React, { Component } from 'react';
 import {
    Text, 
    View, 
    Dimensions, 
    SafeAreaView, 
    TouchableHighlight, 
    Image, 
    Linking,
    ScrollView
 } from 'react-native';

 import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
 import Icon from "react-native-vector-icons/MaterialCommunityIcons";
 import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
 import Carousel, { Pagination } from 'react-native-snap-carousel';
 import VideoPlayer from 'react-native-video-player';
 
 import styles from '../../styles/index';

 export default class VideoDetail extends Component{
    state = {
        data: [
            { title: 'a', url: 'https://photo69.macsc.com/2019/05/27/JPG-190527_444/mZbHmLQnmz_small.jpg' },
            { title: 'b', url: 'https://photo69.macsc.com/2019/05/27/JPG-190527_444/mZbHmLQnmz_small.jpg' },
            { title: 'c', url: 'https://photo69.macsc.com/2019/05/27/JPG-190527_444/mZbHmLQnmz_small.jpg' },
            { title: 'd', url: 'https://photo69.macsc.com/2019/05/27/JPG-190527_444/mZbHmLQnmz_small.jpg' },
            { title: 'e', url: 'https://photo69.macsc.com/2019/05/27/JPG-190527_444/mZbHmLQnmz_small.jpg' },
        ],
        activeSlide: 0,
    }
    
    navigateToScreen = (route) => () => {    
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())    
    }

    _renderItemPopular = ({ item, index }) => {
        return (
            <TouchableHighlight
                onPress={this.navigateToScreen('Home')}
            >
                <View style={{flexDirection: 'column'}} key={index}>
                    <Image source={{uri: item.url}} style={{ width: '100%', height: '100%' }} />
                    <Icon name="play" style={{ color: 'rgba(128,128,128,1)',fontSize: 80, top: '20%', left: '26%', position: 'absolute'}}></Icon>                    
                </View>
            </TouchableHighlight>
        );
    }

    render() {        
        return (      
            <View style={styles.container}>         
            <ScrollView  contentContainerStyle={{
                justifyContent: 'center',
                alignContent: 'center',
                marginBottom: 0,
            }}>
                <View style={{marginTop: 10}}>                    
                    <VideoPlayer
                        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        videoWidth={Dimensions.get("window").width * 1.0}
                        videoHeight={300}            
                        fullscreen={true}
                        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                    />
                    <View style={styles.Section2Style1}>
                        <FontAwesomeIcon
                            name="user-circle-o"
                            style={styles.icon10}
                        ></FontAwesomeIcon>
                        <MaterialCommunityIconsIcon
                            name="chess-king"
                            style={styles.icon11}
                        ></MaterialCommunityIconsIcon>
                        <Text style={styles.gerardM}>Gerard, M</Text>
                        <Text style={styles.christian}>Christian</Text>
                    </View>
                    <View style={styles.Section2Style}>
                        <Text style={styles.contentText}>On the first shot, you see a Projects screen that contains </Text>
                    </View>
                    <View style={styles.Section2Style}>
                        <Text style={{fontSize: 22}}> Tag</Text>                        
                    </View>
                    <View style={styles.Section2Style}>
                        <Text style={{fontSize: 18, color: 'rgba(243,156,18,1)'}}>@Gerard K, @VIck, @Ledoux, @Benni, @Tania, @Yannick, @Ludo...Read More</Text>                        
                    </View>
                    <Text 
                        style={{margin: 15, fontSize: 22, fontWeight: 'bold'}}>
                        #Related
                    </Text>
                    <SafeAreaView style={{ height: 140 }}>
                        <Carousel
                            data={this.state.data}
                            renderItem={this._renderItemPopular}
                            itemWidth={Dimensions.get("window").width * 0.4}
                            sliderWidth={Dimensions.get("window").width * 1.0}
                            slideStyle={{ flex: 1 }}
                            inactiveSlideScale={0.95}
                            useScrollView={true}
                            //containerCustomStyle={{ flex: 1, backgroundColor: "#eee" }}
                            onSnapToItem={index => this.setState({ activeSlide: index })} //for pagination
                            loop
                            //autoplay
                        />
                    </SafeAreaView>
                </View>
            </ScrollView>
            </View>
        );
   }
 }

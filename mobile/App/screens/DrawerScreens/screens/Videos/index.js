 import React, { Component } from 'react';
 import {
    Text, 
    View, 
    Dimensions, 
    SafeAreaView, 
    TouchableHighlight, 
    Image,
    ScrollView
 } from 'react-native';

 import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
 import Icon from "react-native-vector-icons/MaterialCommunityIcons";
 import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
 import Carousel, { Pagination } from 'react-native-snap-carousel';
 
 export default class Videos extends Component{
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

    _renderItemTrending = ({ item, index }) => {
        return (
            <TouchableHighlight
                onPress={() => this.props.navigation.navigate('VideoDetail')}
            >
                <View style={{flexDirection: 'column'}} key={index}>
                    <Image source={{uri: item.url}} style={{ width: '100%', height: '100%' }} />
                    <Icon name="play" style={{ color: 'rgba(128,128,128,1)',fontSize: 80, top: '38%', left: '38%', position: 'absolute'}}></Icon>
                    <FontAwesomeIcon
                        style={{ color: 'rgba(128,128,128,1)',fontSize: 40, top: '80%', left: '8%', position: 'absolute'}}
                        name="user-circle-o"
                    ></FontAwesomeIcon>
                    <Text style={{ color: 'rgba(0,0,0,1)',fontSize: 18, top: '80%', left: '22%', position: 'absolute'}}>Gerard, M</Text>
                    <Text style={{ color: 'rgba(0,0,0,1)',fontSize: 14, top: '86%', left: '22%', position: 'absolute'}}>Christian</Text>
                    <MaterialCommunityIconsIcon
                        name="chess-king"
                        style={{ color: 'rgba(241,196,15,1)',fontSize: 20, top: '77%', left: '16%', position: 'absolute'}}
                    ></MaterialCommunityIconsIcon>                    
                </View>
            </TouchableHighlight>
        );
    }

    _renderItemPopular = ({ item, index }) => {
        return (
            <TouchableHighlight
                onPress={() => this.props.navigation.navigate('VideoDetail')}
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
                marginBottom: 20,
            }}>
                <View style={{marginTop: 10}}>
                    <Text 
                        style={{marginBottom: 10, marginLeft: 15, fontSize: 20, fontWeight: 'bold', color: '#9c9a9a'}}>
                        #Trending
                    </Text>
                    <SafeAreaView style={{ height: 300 }}>
                        <Carousel
                            data={this.state.data}
                            renderItem={this._renderItemTrending}
                            itemWidth={Dimensions.get("window").width * 0.8}
                            sliderWidth={Dimensions.get("window").width * 1.0}
                            slideStyle={{ flex: 1 }}
                            inactiveSlideScale={0.97}
                            useScrollView={true}
                            //containerCustomStyle={{ flex: 1, backgroundColor: "#eee" }}
                            onSnapToItem={index => this.setState({ activeSlide: index })} //for pagination
                            loop
                            autoplay
                        />
                        {/* <Pagination
                            dotsLength={this.state.data.length} //dotの数
                            activeDotIndex={this.state.activeSlide} //どのdotをactiveにするか
                            containerStyle={{paddingVertical:15}} //デフォルトではちと広い
                        /> */}
                    </SafeAreaView>
                    <Text 
                        style={{margin: 15, fontSize: 22, fontWeight: 'bold'}}>
                        #Popular
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

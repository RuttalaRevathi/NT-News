
import React, { Component } from 'react';
import { View, Text, ClipboardStatic, Image, TouchableOpacity, FlatList, Share, ActivityIndicator, StyleSheet, Alert, Dimensions, RefreshControl, Linking } from 'react-native'
import { commonstyles, appThemeColor, light_blue, dark_blue, Header_text, blackcolor, whitecolor } from '../Styles/CommonStyles'
import Header from '../Custom Components/Header/Header'
// import { WebView } from "react-native-twitter-embed";
import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Article, BaseUrl, HomeSlider, RelatedUrl, MenuUrl, Next } from '../Utilities/Api/Urls';
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ScrollView, Swipeable } from 'react-native-gesture-handler';
// import SubHeader from '../Header/SubHeader';
import HTMLView from 'react-native-htmlview';
import { HeaderStyle } from '../Custom Components/Header/Header.Styles';
import SubHeader from '../Custom Components/SubHeader/SubHeader';
// import Clipboard from '@react-native-clipboard/clipboard';
import Ionicons from 'react-native-vector-icons/Ionicons'


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default class CinemaDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.route.params.data,
            RelatedData: [],
            isLoading: false,
            ArticleData: [],
            NewArticleData: [],
            spinner: false,
            onlyRelated: [],
            time: 0,
            refresh: false,
            MenuData: [],
            OnlyLatest: [],
            LatestData: [],
           


        }
    };
    componentDidMount() {
    console.log(this.state.data.length);
    }

    componentDidUpdate() {
        if (this.state.data != this.props.route.params.data) {
            this.fetchData()
            this.goToTop()
        }
    }

    fetchData = () => {
        this.setState({
            ...this.state,
            data: this.props.route.params.data
        })
        var Related_id = this.state.data.id
        //    Api integration for  Related News

        fetch(BaseUrl + RelatedUrl + '?id=' + Related_id)
            .then((response) => response.json())

            .then(responseJson => {
                this.setState({ RelatedData: responseJson, isLoading: true }, () => {
                    var onlyStandard = this.state.RelatedData.data.filter((obj) => {
                        return (obj.format == 'standard')
                    })
                    this.setState({ onlyRelated: onlyStandard }, () => {
                    })
                    var RelateddataId = this.state.RelatedData.id
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // share function
    share = () => {
        Share.share({
            message: this.state.data.link
        })
            .then((result) => console.log(result))
            .then((error) => console.log(error))
    }
    PullMe = () => {
        this.setState({ refresh: true })
        setTimeout(() => {
            this.setState({ refresh: false })

        }, 100)
    }
    goToTop = () => {

        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }
    onFabPress = () => {
        this.scrollRef.current?.scrollTo({
            y: 0,
            animated: true
        });
    }
  
    render() {

        let source1 = this.state.data.content.rendered.replace('lazyload', 'text/javascript')
        const regex = /(<([^>#&'';;]+)>)/ig;
        let decode = require('html-entities-decoder')

        return (

            <View style={commonstyles.container}>

                
            
                <View >
                    <View style={HeaderStyle.subHeadercustom}>
                        <View style={{ flex: 0.3 }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }} style={{ zIndex: 999, }}>
                                <Image source={require('../Assets/Images/arrow.png')} style={{ width: 18, height: 18,top:10 }} />
                                {/* <MaterialIcons name="arrow-back" size={30} color={blackcolor} style={{  left: 10,zIndex: 999, }} /> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-evenly',paddingTop:5 }}>
                            <TouchableOpacity onPress={() => { Linking.openURL('http://www.facebook.com/sharer.php?u=' + this.state.data.link + '%3Futm_source%3Dreferral%26utm_medium%3DFB%26utm_campaign%3Dsocial_share&app_id=369158533547966') }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/facebook_share.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/intent/tweet?url=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/twitter_share.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('whatsapp://send?text=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/whatsapp_share.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => { Linking.openURL('http://www.linkedin.com/shareArticle?mini=true&url=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/linkedin_icon.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => { Linking.openURL('https://t.me/share?url=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/telegram_icon.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.copyToClipboard()}} >
                                <Image resizeMode='contain' source={require('../Assets/Images/link.png')} style={{ width: 35, height: 35 }} />
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                </View>

                <ScrollView
                    ref={(c,) => { this.scroll = c }}
                    stickyHeaderIndices={[1]}
                    showsVerticalScrollIndicator={false}>
                    <View>

                        <View >
                            <FastImage source={{ uri: this.state.data.web_featured_image }} style={commonstyles.Detailslargecard} />
                        </View>

                        <View style={{ margin: 10, }}>
                            <HTMLView
                                value={"<p>" + this.state.data.title.rendered + "</p>"}
                                stylesheet={headerStyles}
                            />

                        </View>

                        <View style={{ flexDirection: 'row', start: 10 }}>
                            <Text style={commonstyles.detailTime}>{(moment(this.state.data.date_gmt).format('MMMM DD , YYYY'))} / </Text>
                            <Text style={commonstyles.detailTime}>{(moment(this.state.data.modified).utcOffset('+05:30').format('hh.mm a'))} IST  </Text>
                        </View>
                        {/* description */}

                        <View style={{ width: screenWidth - 10, justifyContent: 'center', pointerEvents: "none" }}>

                            {/* <WebView
                                style={[styles, { fontFamily: 'Mandali-Regular' }]}
                                source={{ html: source1, baseUrl: 'https://twitter.com' }}
                                javaScriptEnabled={true}
                                scalesPageToFit={false}
                            /> */}
                            {/* <Text>{source1}</Text> */}
                            <AutoHeightWebView
                                androidHardwareAccelerationDisabled // update here androidLayerType="software"
                                customStyle={`
                                  * {
                                    font-family: 'Mandali-Bold';
                                    line-height: 1.5;
                                    -webkit-user-select: none;
                                      -webkit-touch-callout: none; 
                                     }
                                  p {
                                    font-size: 16px;
                                    text-align:left;
                                    margin:10;
                                    font-family:'Mandali-Regular';
                                    line-height:35px
                                                                  }
                                                                  p img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                  p iframe{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                `}
                                source={{ html: source1+="<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>", baseUrl: 'https://twitter.com' }}
                                scalesPageToFit={false}
                                viewportContent={'width=device-width, user-scalable=no'}

                            />
                        </View>

                        {/* Related News */}
                        <View>
                            <View style={{ marginLeft: 10, }}>
                                <Text style={{ color: '#000', fontSize: 22, fontFamily: 'Mandali-Bold' }}>
                                    Related News
                                </Text>
                            </View>
                            {/* Related news FlatList */}

                            <View style={{ position: 'relative' }}>
                                {/* <CustomLoader visible={this.state.spinner}/> */}
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    persistentScrollbar={false}
                                    data={this.state.onlyRelated}
                                    // onEndReached={this.PullMe()}
                                    renderItem={({ item, index }) =>

                                        <View >
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                <View style={commonstyles.cardView}>
                                                    <View style={commonstyles.cateviewImg}>
                                                        <Image source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
                                                    </View>
                                                    <View style={commonstyles.cateviewText}>
                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                            style={commonstyles.latestText}>{decode(item.title.rendered)}</Text>
                                                        <View style={commonstyles.timeview}>
                                                            <Text style={commonstyles.latesttime}>{(moment(item.date_gmt).format('DD-MMM-YYYY'))} , </Text>
                                                            <Text style={commonstyles.latesttime}>{(moment(item.modified).utcOffset('+05:30').format('hh.mm a'))}  </Text>
                                                        </View>

                                                    </View>
                                                </View>
                                            </TouchableOpacity>

                                        </View>

                                    }
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {
                    this.state.isLoading == false &&

                    <View style={commonstyles.loading}>
                        <ActivityIndicator color={appThemeColor} size='large' />
                    </View>
                }
                {/* <TouchableOpacity onPress={() => { this.onFabPress }} style={{ position: 'absolute', right: 10, bottom: 10 }}>
                    <Image resizeMode='contain' source={require('../Assets/Images/top_arrow.png')} style={{ width: 35, height: 35 }} />
                </TouchableOpacity> */}
            </View>
        )
    }
};
const styles = StyleSheet.create({
    p: { color: "#000", fontSize: 22, fontFamily: 'Mandali-Regular', lineHeight: 30 }

})
const headerStyles = StyleSheet.create({
    p: { color: Header_text, fontSize: 24, fontFamily: 'Mandali-Bold', lineHeight: 30, }

})
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 20, fontFamily: 'JIMS', lineHeight: 25, top: 10 }
})
import 'react-native-get-random-values';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Share, ActivityIndicator,Linking, StyleSheet, Alert, Dimensions } from 'react-native'
import { commonstyles, appThemeColor, graycode } from '../Styles/CommonStyles'
import Header from '../Custom Components/Header/Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { WebView } from 'react-native-webview';
import { Article, BaseUrl, HomeSlider, RelatedUrl } from '../Utilities/Api/Urls';
import moment from 'moment'
import FastImage from 'react-native-fast-image'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler';
// import SubHeader from '../Header/SubHeader';
import AutoHeightWebView from 'react-native-autoheight-webview'


import HTMLView from 'react-native-htmlview';
import { HeaderStyle } from '../Custom Components/Header/Header.Styles';
import SubHeader from '../Custom Components/SubHeader/SubHeader';

export default class VideoArticle extends Component {
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
        }


    };

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate() {
        if (this.state.data != this.props.route.params.data) {
            this.fetchData()
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
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ RelatedData: responseJson, isLoading: true }, () => {
                    var onlyStandard = this.state.RelatedData.data.filter((obj) => {
                        return (obj.format == 'standard')
                    })
                    this.setState({ onlyRelated: onlyStandard }, () => {
                    })
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

    render() {

        const regex = /(<([^>#&'';;]+)>)/ig;
        const result = this.state.data.content.rendered
        var Arr = this.state.RelatedData
        let decode = require('html-entities-decoder')
        return (

            <View style={commonstyles.container}>

                
                <View >
                <View style={HeaderStyle.subHeadercustom}>
                        <View style={{ flex: 0.3 }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }} style={{ zIndex: 999, }}>
                                <Image source={require('../Assets/Images/arrow.png')} style={{ width: 30, height: 30, left: 10 }} />
                                {/* <MaterialIcons name="arrow-back" size={30} color={blackcolor} style={{  left: 10,zIndex: 999, }} /> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={() => { Linking.openURL('http://www.facebook.com/sharer.php?u=' + this.state.data.link + '%3Futm_source%3Dreferral%26utm_medium%3DFB%26utm_campaign%3Dsocial_share&app_id=369158533547966') }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/facebook_share.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/intent/tweet?url=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/twitter_share.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('whatsapp://send?text=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/whatsapp_share.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('http://www.linkedin.com/shareArticle?mini=true&url=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/linkedin_icon.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://t.me/share?url=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/telegram_icon.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                </View>
                <ScrollView >
                    <View>
                        {/* <View >
                            <FastImage source={{ uri: this.state.data.web_featured_image }} style={commonstyles.Detailslargecard} />
                        </View> */}

                        <View style={{ margin: 10, flex: 1 }}>
                            <HTMLView
                                value={"<p>" + this.state.data.title.rendered + "</p>"}
                                stylesheet={headerStyles}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', start: 10 }}>
                            <Text style={commonstyles.detailTime}>{(moment(this.state.data.date_gmt).format('MMMM DD , YYYY'))} / </Text>
                            <Text style={commonstyles.detailTime}>{(moment(this.state.data.date_gmt).utcOffset('+05:30').format('hh.mm A'))} IST  </Text>
                        </View>
                        {/* description */}
                        <AutoHeightWebView
                            androidHardwareAccelerationDisabled // update here androidLayerType="software"
                            style={{ width: Dimensions.get('window').width - 15, bottom: 40 }}

                            customStyle={`
                                  * {
                                    font-family: 'JIMS';
                                    line-height: 2;
                                    -webkit-user-select: none;
  -webkit-touch-callout: none; 
                                  }
                                  p {
                                    font-size: 15px;
                                    text-align:justify;
                                    margin:10;
                                    font-family: 'JIMS';
                                                                  }
                                                                  p img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                  p iframe{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                  figure img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                `}

                            source={{ html: this.state.data.content.rendered, baseUrl: 'https://twitter.com' }}
                            scalesPageToFit={false}
                            viewportContent={'width=device-width, user-scalable=no'}

                        />
                        {/* <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                            <HTMLView
                                value={this.state.data.content.rendered}
                                stylesheet={styles}
                            />
                        </View> */}

                        {/* <View style={{ height: 200, width: '95%', marginStart: 10 }}>
                            <WebView
                                androidHardwareAccelerationDisabled
                                source={{ uri: this.state.data.video_url }}
                            />
                        </View> */}
                        {/* Related News */}
                        {/* <View>
                            <View style={{ marginLeft: 10, marginBottom: 20 }}>
                                <Text style={{ color: '#000', fontSize: 20, fontFamily: 'Ramabhadra-Regular' }}>
                                    Related News
                                </Text>
                            </View>
                            Related news FlatList
                            {

                                this.state.onlyRelated.length != 0 && { isLoading: true } ?
                                    <View style={{ position: 'relative' }}>
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            data={this.state.onlyRelated}

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
    
                            :
                            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                            </View>
    }
                        </View> */}
                    </View>
                </ScrollView>
                {
                    this.state.isLoading == false &&

                    <View style={commonstyles.loading}>
                        <ActivityIndicator color={appThemeColor} size='large' />
                    </View>
                }
            </View>
        )
    }
};
const styles = StyleSheet.create({
    p: { color: "#000", fontSize: 22, fontFamily: 'JIMS', lineHeight: 30 }

})
const headerStyles = StyleSheet.create({
    p: { color: appThemeColor, fontSize: 26, fontFamily: 'JIMS', lineHeight: 37, }

})
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 18, fontFamily: 'JIMS', lineHeight: 25, top: 10 }
})
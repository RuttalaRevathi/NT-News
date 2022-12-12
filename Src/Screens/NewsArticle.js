
import React, { Component } from 'react';
import { View, Text, ClipboardStatic, Image, TouchableOpacity, FlatList, Share, ActivityIndicator, StyleSheet, Alert, Dimensions, RefreshControl, Linking, Button } from 'react-native'
import { commonstyles, appThemeColor, light_blue, dark_blue, Header_text, blackcolor, whitecolor, Dark_Gray } from '../Styles/CommonStyles'
import Header from '../Custom Components/Header/Header'
// import { WebView } from "react-native-twitter-embed";
import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import { Article, BaseUrl, HomeSlider, RelatedUrl, MenuUrl, LatestUrl, Next, article } from '../Utilities/Api/Urls';
import moment from 'moment'
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
            DetailsData: this.props.route.params.DetailsData,
            RelatedData: [],
            isLoading: false,
            ArticleData: [],
            // NewArticleData: [],
            spinner: false,
            onlyRelated: [],
            time: 0,
            refresh: false,
            // ArticleData: [],
            OnlyLatest: [],
            LatestData: [],
            PrevData: [],
            NextData: []



        }
    };
    componentDidMount() {
        // console.log(this.state.DetailsData, "============data");
        var Related_id = this.state.data.id
        var article_id = this.state.ArticleData.prev_id

       
        console.log(this.state.data.id,"id===========================");
        fetch(BaseUrl + Next + '?id=' + Related_id)
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({ ArticleData: responseJson, isLoading: true }, () => {
                    console.log(this.state.ArticleData, "==================================Prev and next id");

                });
            });

            fetch(BaseUrl + article + '?id=' + article_id)
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({ PrevData: responseJson, isLoading: true }, () => {
                    console.log(this.state.PrevData, "==================================>");

                });
            });
        //    Api integration for  Latest News
        fetch(BaseUrl + LatestUrl)
            .then((response) => response.json())

            .then(responseJson => {
                this.setState({ LatestData: responseJson, isLoading: true }, () => {
                    // console.log("LatestDataList data===========" + JSON.stringify(this.state.LatestData))                    
                    var onlyStandard = this.state.LatestData.data.filter((obj) => {
                        return (obj.format == 'standard')
                    })
                    this.setState({ OnlyLatest: onlyStandard, }, () => {

                    })
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    componentDidUpdate() {
        this.state.DetailsData = this.props.route.params.DetailsData
        if (this.state.data != this.props.route.params.data ) {
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

    goToTop = () => {

        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }

    render() {
        // let source= this.state.DetailsData.content.rendered

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
                                <Image source={require('../Assets/Images/arrow.png')} style={{ width: 18, height: 18, top: 10 }} />
                                {/* <MaterialIcons name="arrow-back" size={30} color={blackcolor} style={{  left: 10,zIndex: 999, }} /> */}
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 5 }}>
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
                            {/* <TouchableOpacity onPress={() => { this.copyToClipboard() }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/link.png')} style={{ width: 35, height: 35 }} />
                            </TouchableOpacity> */}

                        </View>
                    </View>
                </View>

                <ScrollView
                    ref={(c,) => { this.scroll = c }}
                    stickyHeaderIndices={[1]}
                    showsVerticalScrollIndicator={false}>
                    <View>

                        <View >
                            <Image source={{ uri: this.state.data.web_featured_image }} style={commonstyles.Detailslargecard} />
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
                                source={{ html: source1 += "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>", baseUrl: 'https://twitter.com' }}
                                scalesPageToFit={false}
                                viewportContent={'width=device-width, user-scalable=no'}

                            />
                        </View>


                        {/* Related News */}
                        <View>
                            <View style={{ marginLeft: 10,marginTop:10 }}>
                                <Text style={commonstyles.relatedText}>
                                    Related News
                                </Text>
                            </View>
                            {/* Related news FlatList */}
                            {
                                this.state.onlyRelated.length != 0 && { isLoading: true } ?
                                    <View style={{ position: 'relative' }}>
                                        {/* <CustomLoader visible={this.state.spinner}/> */}
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            data={this.state.onlyRelated}
                                            renderItem={({ item, index }) =>

                                                <View >
                                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", {data: item,DetailsData:this.state.onlyRelated }) }}  >
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
                        </View>

                        {/* Next Article  */}

                        {
                            this.state.DetailsData.length != 0 && { isLoading: true } ?
                                <View>
                                    <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        persistentScrollbar={false}
                                        data={this.state.DetailsData.slice(0, 10)}
                                        renderItem={({ item, index }) =>
                                            <View>
                                                <View style={{ padding: 10, flexDirection: 'row' }}>
                                                    <View style={{}}>
                                                    <Feather name="chevrons-down" size={25} color={Dark_Gray} style={{ marginTop: 3}} />

                                                        {/* <Image source={require('../Assets/Images/down-arrow.png')} style={{ width: 20, height: 20, right: 10, top: 2, marginLeft: 10 }} /> */}
                                                    </View>
                                                    <View>
                                                        <Text style={commonstyles.nextText}>
                                                            Next Article
                                                        </Text>
                                                    </View>

                                                </View>
                                                <View >
                                                    <Image source={{ uri: item.web_featured_image }} style={commonstyles.Detailslargecard} />
                                                </View>

                                                <View style={{ margin: 10, }}>
                                                    <HTMLView
                                                        value={"<p>" + item.title.rendered + "</p>"}
                                                        stylesheet={headerStyles}
                                                    />

                                                </View>

                                                <View style={{ flexDirection: 'row', start: 10 }}>
                                                    <Text style={commonstyles.detailTime}>{(moment(this.state.data.date_gmt).format('MMMM DD , YYYY'))} / </Text>
                                                    <Text style={commonstyles.detailTime}>{(moment(this.state.data.modified).utcOffset('+05:30').format('hh.mm a'))} IST  </Text>
                                                </View>

                                                <View style={{ width: screenWidth - 10, justifyContent: 'center', pointerEvents: "none" }}>

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
                                                        source={{ html: item.content.rendered+= "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>", baseUrl: 'https://twitter.com' }}
                                                        scalesPageToFit={false}
                                                        viewportContent={'width=device-width, user-scalable=no'}

                                                    />
                                                </View>
                                            </View>
                                        }
                                    />
                                </View>
                                :
                                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                    <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                </View>
                        }
                        {/* Flash News */}
                        <View>
                            <View style={{ marginLeft: 10, }}>
                                <Text style={commonstyles.relatedText}>
                                    Flash News
                                </Text>
                            </View>
                            <View style={commonstyles.photoview}>

                                <View>
                                    {
                                        this.state.OnlyLatest.length != 0 && { isLoading: true } ?
                                            <View >
                                                <FlatList
                                                    data={this.state.OnlyLatest}
                                                    showsHorizontalScrollIndicator={false}
                                                    horizontal={true}
                                                    renderItem={({ item, index }) =>
                                                        <View style={{ marginRight: 5, marginLeft: 10, }} >
                                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", {data: item,DetailsData:this.state.OnlyLatest}) }}  >
                                                                <View style={commonstyles.sliderView}>
                                                                    <Image source={{ uri: item.web_featured_image }}
                                                                        style={commonstyles.photocard}  >
                                                                    </Image>
                                                                    <LinearGradient colors={['transparent', 'black']}
                                                                        style={commonstyles.linearGradient}
                                                                        start={{ x: 0.5, y: 0.2 }}
                                                                        locations={[0.2, 0.8]}>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail' style={commonstyles.flashtext}>{item.title.rendered}</Text>
                                                                    </LinearGradient>
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
                                </View>
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
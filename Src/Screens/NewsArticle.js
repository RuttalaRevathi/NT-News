
import React, { Component } from 'react';
import { View, Text, ClipboardStatic, Image, TouchableOpacity, FlatList, Share, ActivityIndicator, StyleSheet, Alert, Dimensions, RefreshControl, Linking } from 'react-native'
import { commonstyles, appThemeColor, light_blue, dark_blue, Header_text, blackcolor, whitecolor } from '../Styles/CommonStyles'
import Header from '../Custom Components/Header/Header'
// import { WebView } from "react-native-twitter-embed";
import { WebView } from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Article, BaseUrl, HomeSlider, RelatedUrl, MenuUrl, LatestUrl } from '../Utilities/Api/Urls';
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
        console.log(props, "props")
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
        //    Api integration for  Menu
        fetch(BaseUrl + MenuUrl)
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({ MenuData: responseJson, isLoading: true }, () => {

                });

            })
        this.fetchData()
        setTimeout(() => {
            this.setState({ time: '10' });
        }, 500);
          //    Api integration for  Latest News
          fetch(BaseUrl + LatestUrl)
          .then((response) => response.json())

          .then(responseJson => {
              // console.log("Latest News Responce Json" + JSON.stringify(responseJson))

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
    copyToClipboard = () => {
        Clipboard.setString(this.state.data.link);
    }
    render() {

        let source1 = this.state.data.content.rendered.replace('lazyload', 'text/javascript')
        const regex = /(<([^>#&'';;]+)>)/ig;
        let decode = require('html-entities-decoder')

        return (

            <View style={commonstyles.container}>

                <Header image={require('../Assets/Images/logo.png')}
                    isMenu={true} leftBtnClick={() => {
                        this.props.navigation.openDrawer()
                    }} isNotif={true} NotificationClick={() => this.props.navigation.navigate("LatestNews")} />
                {/* Top Scroller */}
                {/* <View>

                    <FlatList
                        style={{ backgroundColor: light_blue, borderBottomColor: dark_blue, borderBottomWidth: 1.5, }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        persistentScrollbar={true}
                        data={this.state.MenuData}
                        ref={(ref) => { this.headerSlots = ref; }}
                        extraData={this.state}
                        renderItem={({ item, index }) =>  
                            <View>

                                <TouchableOpacity onPress={() => {
                                    switch (index) {
                                        case 0: {
                                            this.props.navigation.navigate("Varthalu");
                                        }
                                            break;
                                        case 1: {
                                            this.props.navigation.navigate("Hyderabad");
                                        }
                                            break;
                                        case 2: {
                                            this.props.navigation.navigate("National");
                                        }
                                            break;
                                        case 3: {
                                            this.props.navigation.navigate("InterNational");

                                        }
                                            break;
                                        case 4: {
                                            this.props.navigation.navigate("Telangana");

                                        }
                                            break;
                                        case 5: {
                                            this.props.navigation.navigate("Ap");

                                        }
                                            break;
                                        case 6: {
                                            this.props.navigation.navigate("Cinema");

                                        }
                                            break;
                                        case 7: {
                                            this.props.navigation.navigate("Sports");

                                        }
                                            break;
                                        case 8: {
                                            this.props.navigation.navigate("Chinthana");

                                        }
                                            break;
                                        case 9: {
                                            this.props.navigation.navigate("Education");

                                        }
                                            break;
                                        case 10: {
                                            this.props.navigation.navigate("Business");

                                        }
                                            break;
                                        case 11: {
                                            this.props.navigation.navigate("Special");

                                        }
                                            break;
                                        case 12: {
                                            this.props.navigation.navigate("LifeStyle");

                                        }
                                            break;
                                        case 13: {
                                            this.props.navigation.navigate("Photos");

                                        }
                                            break;
                                        case 14: {
                                            this.props.navigation.navigate("Videos");

                                        }
                                            break;
                                        case 15: {
                                            this.props.navigation.navigate("More");

                                        }
                                            break;
                                        case 16: {
                                            this.props.navigation.navigate("Bathukamma");

                                        }
                                            break;
                                        case 17: {
                                            this.props.navigation.navigate("Nri");
                                        }
                                            break;
                                        case 18: {
                                            this.props.navigation.navigate("Science");

                                        }
                                            break;
                                        case 19: {
                                            this.props.navigation.navigate("Cartoon");

                                        }
                                            break;
                                        case 20: {
                                            this.props.navigation.navigate("EverGreen");

                                        }
                                            break;
                                        case 21: {
                                            this.props.navigation.navigate("Crime");

                                        }
                                            break;
                                        case 22: {
                                            this.props.navigation.navigate("Zindagi");

                                        }
                                            break;
                                        case 23: {
                                            this.props.navigation.navigate("Bathukamma");

                                        }
                                            break;
                                        case 24: {
                                            this.props.navigation.navigate("Tourism");

                                        }
                                            break;
                                        case 25: {
                                            this.props.navigation.navigate("Agriculture");

                                        }
                                            break;
                                        case 26: {
                                            this.props.navigation.navigate("EditPage");

                                        }
                                            break;
                                        case 27: {
                                            this.props.navigation.navigate("Sampadha");

                                        }
                                            break;
                                        case 28: {
                                            this.props.navigation.navigate("Cooking");

                                        }
                                            break;
                                        case 29: {
                                            this.props.navigation.navigate("Kathalu");

                                        }
                                            break;
                                        case 30: {
                                            this.props.navigation.navigate("Health");

                                        }
                                        case 31: {
                                            this.props.navigation.navigate("Vaasthu");

                                        }
                                            break;
                                        default: {
                                            this.props.navigation.navigate("Sahithyam");


                                        }
                                    }

                                }}>
                                    <View style={commonstyles.menuview}>

                                        <Text style={commonstyles.menutext}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        }
                    />
                </View> */}
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
                            <TouchableOpacity onPress={() => { this.copyToClipboard() }} >
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
                                source={{ html: source1+="<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px}</style>", baseUrl: 'https://twitter.com' }}
                                scalesPageToFit={false}
                                viewportContent={'width=device-width, user-scalable=no'}

                            />
                        </View>
{/* LatestNews  */}
<View>
                        {/* LatestNews  text*/}

                        <View style={{ flexDirection: 'row', marginLeft: 10, top: 5, bottom: 5, flex: 1 }}>
                            <View style={commonstyles.categoryView}>
                                <View>
                                    <Text style={commonstyles.Category}>
                                        తాజావార్తలు
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("LatestNews") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* flatlist for Latest News */}
                        <View>
                            {

                                this.state.OnlyLatest.length != 0 && { isLoading: true } ?
                                    <View style={commonstyles.flatView}>
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.OnlyLatest.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={{ margin: 10, width: screenWidth - 200 }}>
                                                                <View style={{ backgroundColor: whitecolor, height: 160, borderRadius: 5 }}>

                                                                    <View>
                                                                        <FastImage style={{ width: 160, height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={{ color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 20, lineHeight: 33, left: 5, right: 2 }}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            {/* <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
                                                                </View>
                                                                <View style={commonstyles.cateviewText}>
                                                                    <Text numberOfLines={2} ellipsizeMode='tail'
                                                                        style={commonstyles.latestText}>{decode(item.title.rendered)}</Text>
                                                                    <View style={commonstyles.timeview}>
                                                                        <Text style={commonstyles.latesttime}>{(moment(item.date_gmt).format('DD-MMM-YYYY'))} , </Text>
                                                                        <Text style={commonstyles.latesttime}>{(moment(item.modified).utcOffset('+05:30').format('hh.mm a'))}</Text>
                                                                    </View>

                                                                </View>
                                                            </View> */}
                                                        </TouchableOpacity>
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
                        </View>

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
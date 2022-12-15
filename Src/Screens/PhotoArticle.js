
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Share, ActivityIndicator, Linking, StyleSheet, Alert, Dimensions } from 'react-native'
import { commonstyles, appThemeColor, graycode, blackcolor, whitecolor } from '../Styles/CommonStyles'
import Header from '../Custom Components/Header/Header'
import AutoHeightWebView from 'react-native-autoheight-webview'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';

import { Article, BaseUrl, HomeSlider, RelatedUrl } from '../Utilities/Api/Urls';
import moment from 'moment'

import { ScrollView } from 'react-native-gesture-handler';
// import SubHeader from '../Header/SubHeader';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import { HeaderStyle } from '../Custom Components/Header/Header.Styles';
import SubHeader from '../Custom Components/SubHeader/SubHeader';
const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;
export default class PhotoArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.route.params.data,
            DetailsData: this.props.route.params.DetailsData,
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
        this.state.DetailsData = this.props.route.params.DetailsData
        if (this.state.data != this.props.route.params.data) {
            this.fetchData()
        }
    }
    goToTop = () => {

        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }
    getIndex = () => {
        var index = this.state.DetailsData.findIndex(x => x.id == this.state.data.id)
        console.log("findIndex==============", index);
        return index + 1;
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
                    var RelateddataId = this.state.RelatedData.id
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        console.log(this.state.DetailsData, "title");
        let source1 = this.state.data.content.rendered.replace('lazyload', 'text/javascript')
        const INJECTEDJAVASCRIPT = "document.body.style.userSelect = 'none'";

        // var tmp = inner.replace(array(/<a .*?>/g,'</a>'),"",);
        const result1 = this.state.data.content.rendered.replace(/<a .*?>/g, "");
        const result = result1.replace(/<a>/g, "");
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
                            <TouchableOpacity onPress={() => { Linking.openURL('https://t.me/share?url=' + this.state.data.link) }} >
                                <Image resizeMode='contain' source={require('../Assets/Images/telegram_icon.png')} style={{ width: 30, height: 30 }} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <ScrollView ref={(c,) => { this.scroll = c }}
                    style={{ backgroundColor: blackcolor }}
                >
                    <View>


                        <View style={{ margin: 10, flex: 1 }}>
                            <HTMLView
                                value={"<p>" + this.state.data.title.rendered + "</p>"}
                                stylesheet={headerStyles}
                            />
                        </View>
                        <View>
                            <AutoHeightWebView
                                androidHardwareAccelerationDisabled// update here androidLayerType="software"
                                style={{ width: Dimensions.get('window').width - 15 }}

                                customStyle={`
                                  * {
                                    font-family: 'JIMS';
                                    -webkit-user-select: none;
                                    -webkit-touch-callout: none; 
                                  }
                                  p {
                                    font-size: 16px;
                                    text-align:justify;
                                    
                                                                  }
                                                                  div{
                                                                    margin:10px 0px 0px 10px;
                                                                  }
                                                                  img{
                                                                    width:100%;
                                                                    height:inherit
                                                                  }
                                                                 
                                `}

                                source={{ html: result }}
                                scalesPageToFit={false}
                                viewportContent={'width=device-width, user-scalable=no'}
                            />
                        </View>
                    </View>
                    <View>

                        {/* Flash News */}
                        <View>
                            <View style={{ marginLeft: 10, }}>
                                <Text style={commonstyles.photoflash}>
                                    Related Gallery</Text>
                            </View>
                            <View style={commonstyles.photoview}>
                                <View>
                                    {
                                        // this.state.DetailsData.length != 0 && { isLoading: true } ?
                                        <View >
                                            <FlatList
                                                data={this.state.DetailsData.slice(this.getIndex(), this.getIndex() + 10)}
                                                showsHorizontalScrollIndicator={false}
                                                horizontal={true}
                                                renderItem={({ item, index }) =>
                                                    <View style={{ marginRight: 5, marginLeft: 10, }} >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("PhotoGalleryArticle", { data: item, DetailsData: this.state.DetailsData }) }}  >
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
                                        // :
                                        // <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        //     <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                        // </View>
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
    p: {}

})
const headerStyles = StyleSheet.create({
    p: { color: whitecolor, fontSize: 26, fontFamily: 'Mandali-Bold', lineHeight: 37, }

})
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 18, fontFamily: 'Mandali-Bold', lineHeight: 25, top: 10 }
})
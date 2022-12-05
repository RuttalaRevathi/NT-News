import React, { Component, useRef } from 'react';
import { Text, View, FlatList, ScrolView, TouchableOpacity, Image, ImageBackground, SafeAreaView, LogBox, RefreshControl, Dimensions, } from 'react-native';
import { appThemeColor, browncode, commonstyles, videocolor, graycode, graycodelight, gallerycolor, light_blue, dark_blue, blackcolor, Gary_Light, whitecolor } from '../Styles/CommonStyles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../Custom Components/Header/Header';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    Agriculture, Ap, BaseUrl, Bathukamma, Business, Cartoon, CategoryUrl, Chinthana, Cinema, Cooking,
    Crime, Editpage, EditPage, Education, Evergreen, EverGreen, Health, Hyderabad,
    International, Kathalu, LatestUrl, Lifestyle, LifeStyle, MenuUrl, More,
    National, Nri, Photos, Sahithyam, Sampadha, Science, Slider, Special, Sports, SportsUrl,
    Telangana, TeluguAgriculture, TeluguAp, TeluguBathukamma, TeluguBusiness, TeluguCartoon, TeluguChinthana, TeluguCinema, TeluguCooking, TeluguCrime, TeluguEditpage, TeluguEducation, TeluguEvergreen, TeluguHealth, TeluguHyderabad, TeluguInternational, TeluguKathalu, TeluguLifestyle, TeluguMore, TeluguNational, TeluguNri, TeluguPhotos, WebstoriesUrl, Zindagi,
    TeluguSahithyam, TeluguSampadha, TeluguScience, TeluguSpecial, TeluguSports, TeluguTelangana, TeluguTourism, TeluguVaasthu, TeluguVideos, TeluguZindagi, Tourism, Vaasthu, Vantalu, Videos, Varthalu, TeluguVarthalu,
} from '../Utilities/Api/Urls';
import moment from 'moment';
import FastImage from 'react-native-fast-image'
import { DarkTheme } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        //    this.mySectionListRef = useRef()
        this.state = {
            LatestData: [],
            isLoading: false,
            MenuData: [],
            SliderData: [],
            dataSource: [],
            CinemaData: [],
            WebStoriesData: [],
            OnlyLatest: [],
            Gallery: [],
            SportsData: [], HyderabadData: [], NationalData: [], InterNationalData: [],
            TelanganaData: [], BusinessData: [], NriData: [], LifeStyleData: [],
            VideosData: [], CartoonData: [], EverGreenData: [], CrimeData: [], ZindagiData: [],
            TourismData: [], AgricultureData: [], EditpageData: [], CookingData: [],
            StoriesData: [], ApData: [], ChinthanaData: [], EducationData: [], SpecialData: [],
            MoreData: [], ScienceData: [], VarthaluData: [], BathukammaData: [], SampadhaData: [],
            HealthData: [], VaasthuData: [], SahithyamData: [],
            refresh: false,

        }

    }
    componentDidMount() {
        //    Api integration for  Menu
        fetch(BaseUrl + MenuUrl)
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({ MenuData: responseJson, isLoading: true }, () => {

                });

            })

        //    Api integration for  slider News
        fetch(BaseUrl + Slider)
            .then((response) => response.json())

            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))

                this.setState({ SliderData: responseJson, isLoading: true }, () => {
                    // console.log("SliderData data=========================================================" + JSON.stringify(this.state.SliderData.data))
                    // console.log(" data=========================================================" + (this.state.LatestData.data[0].date))

                });

            })

            .catch((error) => {
                console.error(error);
            });
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
        //    Api integration for  Varthalu News
        fetch(BaseUrl + CategoryUrl + Varthalu).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ VarthaluData: responseJson, isLoading: true }, () => {
                    // console.log("CinemaDataList data=========================================================" + JSON.stringify(this.state.CinemaData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Hyderabad News
        fetch(BaseUrl + CategoryUrl + Hyderabad).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ HyderabadData: responseJson, isLoading: true }, () => {
                    // console.log("HyderabadList data=========================================================" + JSON.stringify(this.state.Hyderabad.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  National News
        fetch(BaseUrl + CategoryUrl + National).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ NationalData: responseJson, isLoading: true }, () => {
                    // console.log("NationalData data=========================================================" + JSON.stringify(this.state.NationalData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  International News
        fetch(BaseUrl + CategoryUrl + International).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ InterNationalData: responseJson, isLoading: true }, () => {
                    // console.log("InterNationalData data=========================================================" + JSON.stringify(this.state.InterNationalData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Telangana News
        fetch(BaseUrl + CategoryUrl + Telangana).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ TelanganaData: responseJson, isLoading: true }, () => {
                    // console.log("TelanganaData=========================================================" + JSON.stringify(this.state.TelanganaData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Ap News
        fetch(BaseUrl + CategoryUrl + Ap).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ ApData: responseJson, isLoading: true }, () => {
                    // console.log("ApData================================" + JSON.stringify(this.state.ApData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Cinema News
        fetch(BaseUrl + CategoryUrl + Cinema).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ CinemaData: responseJson, isLoading: true }, () => {
                    // console.log("CinemaDataList data=========================================================" + JSON.stringify(this.state.CinemaData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Sports
        fetch(BaseUrl + CategoryUrl + Sports)
            .then((response) => response.json())

            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))

                this.setState({ SportsData: responseJson, isLoading: true }, () => {
                    // console.log("SportsData data=========================================================" + JSON.stringify(this.state.SportsData.data))
                    // console.log(" data=========================================================" + (this.state.LatestData.data[0].date))
                });
            })

            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Chinthana News
        fetch(BaseUrl + CategoryUrl + Chinthana).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ ChinthanaData: responseJson, isLoading: true }, () => {
                    // console.log("ChinthanaData================================" + JSON.stringify(this.state.ChinthanaData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Education News
        fetch(BaseUrl + CategoryUrl + Education).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ EducationData: responseJson, isLoading: true }, () => {
                    // console.log("EducationData================================" + JSON.stringify(this.state.EducationData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Business News
        fetch(BaseUrl + CategoryUrl + Business).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ BusinessData: responseJson, isLoading: true }, () => {
                    // console.log("BusinessData=========================================================" + JSON.stringify(this.state.BusinessData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  special News
        fetch(BaseUrl + CategoryUrl + Special).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ SpecialData: responseJson, isLoading: true }, () => {
                    // console.log("SpecialData================================" + JSON.stringify(this.state.SpecialData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  NRI News
        fetch(BaseUrl + CategoryUrl + Nri).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ NriData: responseJson, isLoading: true }, () => {
                    // console.log("NriData=========================================================" + JSON.stringify(this.state.NriData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Lifestyle News
        fetch(BaseUrl + CategoryUrl + Lifestyle).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ LifeStyleData: responseJson, isLoading: true }, () => {
                    // console.log("LifeStyleData=========================================================" + JSON.stringify(this.state.LifeStyleData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Web stories
        fetch(BaseUrl + WebstoriesUrl).then((response) =>
            response.json())

            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))

                this.setState({ WebStoriesData: responseJson, isLoading: true }, () => {
                    // console.log("WebStoriesData data=========================================================" + JSON.stringify(this.state.WebStoriesData.data))
                    // console.log(" data=========================================================" + (this.state.LatestData.data[0].date))

                });

            })

            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Photogallery
        fetch(BaseUrl + CategoryUrl + Photos).then((response) =>
            response.json())

            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))

                this.setState({ Gallery: responseJson, isLoading: true }, () => {
                    // console.log("WebStoriesData data=========================================================" + JSON.stringify(this.state.WebStoriesData.data))
                    // console.log(" data=========================================================" + (this.state.Gallery))

                });

            })

            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Videos News
        fetch(BaseUrl + CategoryUrl + Videos).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ VideosData: responseJson, isLoading: true }, () => {
                    // console.log("VideosData=========================================================" + JSON.stringify(this.state.VideosData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  More News
        fetch(BaseUrl + CategoryUrl + More).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ MoreData: responseJson, isLoading: true }, () => {
                    // console.log("MoreData================================" + JSON.stringify(this.state.MoreData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Science News
        fetch(BaseUrl + CategoryUrl + Science).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ ScienceData: responseJson, isLoading: true }, () => {
                    // console.log("ScienceData================================" + JSON.stringify(this.state.ScienceData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Cartoon News
        fetch(BaseUrl + CategoryUrl + Cartoon).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ CartoonData: responseJson, isLoading: true }, () => {
                    // console.log("CartoonData=========================================================" + JSON.stringify(this.state.CartoonData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  EverGreen News
        fetch(BaseUrl + CategoryUrl + Evergreen).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ EverGreenData: responseJson, isLoading: true }, () => {
                    // console.log("EverGreenData=========================================================" + JSON.stringify(this.state.EverGreenData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Crime News
        fetch(BaseUrl + CategoryUrl + Crime).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ CrimeData: responseJson, isLoading: true }, () => {
                    // console.log("CrimeData=========================================================" + JSON.stringify(this.state.CrimeData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Zindagi News
        fetch(BaseUrl + CategoryUrl + Zindagi).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ ZindagiData: responseJson, isLoading: true }, () => {
                    // console.log("ZindagiData=========================================================" + JSON.stringify(this.state.ZindagiData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Bathukamma News
        fetch(BaseUrl + CategoryUrl + Bathukamma).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ BathukammaData: responseJson, isLoading: true }, () => {
                    // console.log("TourismData================================" + JSON.stringify(this.state.TourismData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Tourism News
        fetch(BaseUrl + CategoryUrl + Tourism).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ TourismData: responseJson, isLoading: true }, () => {
                    // console.log("TourismData================================" + JSON.stringify(this.state.TourismData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Agriculture News
        fetch(BaseUrl + CategoryUrl + Agriculture).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ AgricultureData: responseJson, isLoading: true }, () => {
                    // console.log("AgricultureData================================" + JSON.stringify(this.state.AgricultureData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  EditPage News
        fetch(BaseUrl + CategoryUrl + Editpage).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ EditpageData: responseJson, isLoading: true }, () => {
                    // console.log("EditpageData================================" + JSON.stringify(this.state.EditpageData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  Sampadha News
        fetch(BaseUrl + CategoryUrl + Sampadha).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ SampadhaData: responseJson, isLoading: true }, () => {
                    // console.log("EditpageData================================" + JSON.stringify(this.state.EditpageData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });

        //    Api integration for  cooking News
        fetch(BaseUrl + CategoryUrl + Cooking).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ CookingData: responseJson, isLoading: true }, () => {
                    // console.log("CookingData================================" + JSON.stringify(this.state.CookingData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Stories News
        fetch(BaseUrl + CategoryUrl + Kathalu).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ StoriesData: responseJson, isLoading: true }, () => {
                    // console.log("StoriesData================================" + JSON.stringify(this.state.StoriesData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Health News
        fetch(BaseUrl + CategoryUrl + Health).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ HealthData: responseJson, isLoading: true }, () => {
                    // console.log("StoriesData================================" + JSON.stringify(this.state.StoriesData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Vaasthu News
        fetch(BaseUrl + CategoryUrl + Vaasthu).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ VaasthuData: responseJson, isLoading: true }, () => {
                    // console.log("StoriesData================================" + JSON.stringify(this.state.StoriesData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
        //    Api integration for  Sahithyam News
        fetch(BaseUrl + CategoryUrl + Sahithyam).then((response) => response.json())
            .then(responseJson => {
                // console.log("Latest News Responce Json" + JSON.stringify(responseJson))
                this.setState({ SahithyamData: responseJson, isLoading: true }, () => {
                    // console.log("StoriesData================================" + JSON.stringify(this.state.StoriesData.data))
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    goToTop = () => {
        this.scroll.scrollTo({ x: 0, y: 0, animated: true });
    }

    render() {
        const regex = /(<([^&#;>]+)>)/ig
        let decode = require('html-entities-decoder')
        // const mySectionListRef = useRef();
        return (
            <SafeAreaView style={commonstyles.container}>

                <ScrollView style={{ backgroundColor: Gary_Light }}
                    ref={this.mySectionListRef}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refresh}
                            
                        />
                    }
                >
                    {/* Slider View */}
                    <View>
                        <FlatList
                            data={this.state.SliderData.data}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({ item, index }) =>
                                <View style={{ marginRight: 5, marginLeft: 5, marginTop: 10 }} >
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                        <View style={commonstyles.sliderView}>
                                            <FastImage source={{ uri: item.web_featured_image }}
                                                style={commonstyles.slidercard}  >
                                            </FastImage>
                                            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
                                                style={commonstyles.sliderGradient}>
                                                <Text style={commonstyles.slidertext}>{item.title.rendered}</Text>
                                            </LinearGradient>

                                        </View>
                                    </TouchableOpacity>

                                </View>
                            }

                        />
                    </View>

                    {/* LatestNews  */}
                    <View>
                        {/* LatestNews  text*/}

                        <View style={{ flexDirection: 'row',  top: 5, bottom: 5, flex: 1, }}>
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
                                            style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.OnlyLatest.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                // numColumns={2}
                                                data={this.state.OnlyLatest.slice(2, 8)}
                                                renderItem={({ item, index }) =>
                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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

                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>

                    </View>

                    {/* Varthalu  */}
                    <View>
                        {/* Varthalu  text*/}

                        <View style={{ flexDirection: 'row', marginLeft: 10, top: 5, bottom: 5, flex: 1 }}>
                            <View style={commonstyles.categoryView}>
                                <View>
                                    <Text style={commonstyles.Category}>
                                        వార్తలు
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Varthalu") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* flatlist for Varthalu News */}
                        <View>
                            {

                                this.state.VarthaluData.length != 0 && { isLoading: true } ?
                                    <View style={commonstyles.flatView}>
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.VarthaluData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                // numColumns={2}
                                                data={this.state.OnlyLatest.slice(2, 8)}
                                                renderItem={({ item, index }) =>
                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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

                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>

                    </View>
                    {/* Hyderabad News */}
                    <View>
                        {/* Hyderabad   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        హైదరాబాద్‌
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Hyderabad") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Hyderabad  Cards*/}
                        <View>
                            {

                                this.state.HyderabadData.length != 0 && { isLoading: true } ?
                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.HyderabadData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.HyderabadData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* National News */}
                    <View>
                        {/* National news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        జాతీయం
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("National") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* National  Cards*/}
                        <View>
                            {
                                this.state.NationalData.length != 0 && { isLoading: true } ?
                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.NationalData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.NationalData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* InterNational News */}
                    <View>
                        {/* InterNational   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        అంతర్జాతీయం
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("InterNational") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* InterNational  Cards*/}
                        <View>
                            {

                                this.state.InterNationalData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.InterNationalData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.InterNationalData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Telangana News */}
                    <View>
                        {/* Telangana news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        తెలంగాణ
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Telangana") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Telangana  Cards*/}
                        <View>
                            {
                                this.state.TelanganaData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.TelanganaData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.TelanganaData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Ap News */}
                    <View>
                        {/* Ap   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        ఏపీ
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Ap") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Ap  Cards*/}
                        <View>
                            {

                                this.state.ApData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.ApData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.ApData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>
                    {/* Cinema News */}
                    <View>
                        {/* Cinema   text*/}


                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        సినిమా
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Cinema") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/*  Cinema  Cards*/}
                        <View>
                            {

                                this.state.CinemaData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.CinemaData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.CinemaData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>
                    {/* Sports */}
                    <View>
                        {/* sports news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        స్పోర్ట్స్
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Sports") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* sports   Cards*/}
                        <View>
                            {
                                this.state.SportsData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.SportsData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.SportsData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Chinthana News */}
                    <View>
                        {/* Chinthana news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        చింతన
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Chinthana") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Chinthana  Cards*/}
                        <View>
                            {
                                this.state.ChinthanaData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.ChinthanaData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.ChinthanaData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>
                    {/* Education News */}
                    <View>
                        {/* Education news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        ఎడ్యుకేషన్ & కెరీర్‌
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Education") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* education  Cards*/}
                        <View>
                            {
                                this.state.EducationData.length != 0 && { isLoading: true } ?
                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.EducationData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.EducationData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Business News */}
                    <View>
                        {/* Business news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        బిజినెస్
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Business") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Business  Cards*/}
                        <View>
                            {
                                this.state.BusinessData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.BusinessData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.BusinessData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Special News */}
                    <View>
                        {/* Special   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        ప్రత్యేకం
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Special") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Special  Cards*/}
                        <View>
                            {

                                this.state.SpecialData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.SpecialData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.SpecialData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Nri News */}
                    <View>
                        {/* Nri   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        ఎన్‌ఆర్‌ఐ
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Nri") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Nri  Cards*/}
                        <View>
                            {

                                this.state.NriData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.NriData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.NriData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* LifeStyle News */}
                    <View>
                        {/* LifeStyle news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        లైఫ్‌స్టైల్‌
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("LifeStyle") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Lifestyle  Cards*/}
                        <View>
                            {
                                this.state.LifeStyleData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.LifeStyleData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.LifeStyleData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Photo Gallery */}
                    <View>
                        {/*photo gallery  text*/}

                        <View style={commonstyles.photoview}>
                            <View style={commonstyles.phototextview}>
                                <View style={{ flex: 1.7 }}>
                                    <Text style={commonstyles.ptext}>
                                        ఫోటో గ్యాలరీ
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3 }}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Photos") }}  >
                                        <Ionicons name="arrow-forward" size={25} color={"#111"} style={{ justifyContent: 'center', }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* photo gallery  Cards*/}
                            <View>
                                {

                                    this.state.Gallery.length != 0 && { isLoading: true } ?

                                        <View >

                                            <FlatList
                                                data={this.state.Gallery.data}
                                                showsHorizontalScrollIndicator={false}
                                                horizontal={true}
                                                renderItem={({ item, index }) =>
                                                    <View style={{ marginRight: 5, marginLeft: 10, }} >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("PhotoGalleryArticle", { data: item }) }}  >
                                                            <View style={commonstyles.sliderView}>
                                                                <FastImage source={{ uri: item.web_featured_image }}
                                                                    style={commonstyles.photocard}  >
                                                                </FastImage>
                                                                <LinearGradient colors={['transparent', 'white']}
                                                                    style={commonstyles.linearGradient}
                                                                    start={{ x: 0.5, y: 0.2 }}
                                                                    locations={[0.2, 0.8]}>
                                                                    <Text numberOfLines={2} ellipsizeMode='tail' style={commonstyles.phototext}>{item.title.rendered}</Text>
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

                     {/* More News */}
                     <View>
                        {/* More   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        మరిన్ని
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("More") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* More  Cards*/}
                        <View>
                            {

                                this.state.MoreData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.MoreData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.MoreData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Science News */}
                    <View>
                        {/* Science news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        సైన్స్‌ అండ్‌ టెక్నాలజీ
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Science") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Science  Cards*/}
                        <View>
                            {
                                this.state.ScienceData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.ScienceData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.ScienceData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* videos Gallery */}
                    <View>
                        {/*videos  text*/}

                        <View style={commonstyles.photoview}>
                            <View style={commonstyles.phototextview}>
                                <View style={{ flex: 1.7 }}>
                                    <Text style={commonstyles.ptext}>
                                        వీడియోలు
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3 }}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Videos") }}  >
                                        <Ionicons name="arrow-forward" size={25} color={"#fff"} style={{ justifyContent: 'center', }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* videos  Cards*/}
                            <View>
                                {

                                    this.state.VideosData.length != 0 && { isLoading: true } ?
                                        <View >

                                            <FlatList
                                                data={this.state.VideosData.data}
                                                showsHorizontalScrollIndicator={false}
                                                horizontal={true}
                                                renderItem={({ item, index }) =>
                                                    <View style={{ marginRight: 5, marginLeft: 10, }} >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("VideoArticle", { data: item }) }}  >
                                                            <View style={commonstyles.sliderView}>

                                                                <ImageBackground imageStyle={{ borderRadius: 6 }} source={{ uri: item.web_featured_image }} style={commonstyles.photocard} >
                                                                    <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', marginVertical: 100 }}>
                                                                        <FastImage style={{ width: 30, height: 20 }} source={require('../Assets/Images/videoicon.png')} />
                                                                    </View>
                                                                </ImageBackground>
                                                                <LinearGradient colors={['transparent', 'white']}
                                                                    style={commonstyles.linearGradient}
                                                                    start={{ x: 0.5, y: 0.2 }}
                                                                    locations={[0.2, 0.8]}>
                                                                    <Text numberOfLines={2} ellipsizeMode='tail' style={commonstyles.phototext}>{item.title.rendered}</Text>
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
                   
                    {/* Cartoon News */}
                    <View>
                        {/* Cartoon   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        కార్టూన్‌
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Cartoon") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Cartoon  Cards*/}
                        <View>
                            {

                                this.state.CartoonData.length != 0 && { isLoading: true } ?

                                    <View >
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            data={this.state.CartoonData.data}
                                            showsHorizontalScrollIndicator={true}
                                            horizontal={true}

                                            renderItem={({ item, index }) =>

                                                <View style={{ flex: 1, }}>
                                                    <View style={commonstyles.CartoonCard}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("CartoonArticle", { data: item }) }}  >
                                                            <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cartoonimg} />
                                                            <View >
                                                                <Text numberOfLines={2} ellipsizeMode='tail' style={commonstyles.SportText}>{item.title.rendered}</Text>
                                                            </View>
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

                    {/* Evergreen News */}
                    <View>
                        {/* Evergreen news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        ఎవర్‌గ్రీన్‌
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("EverGreen") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Evergreen  Cards*/}
                        <View>
                            {
                                this.state.EverGreenData.length != 0 && { isLoading: true } ?
                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.EverGreenData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.EverGreenData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Crime News */}
                    <View>
                        {/* Crime   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        క్రైమ్‌
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Crime") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* crime  Cards*/}
                        <View>
                            {

                                this.state.CrimeData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.CrimeData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.CrimeData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Zindagi News */}
                    <View>
                        {/* Zindagi news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        జిందగీ
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Zindagi") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Zindagi  Cards*/}
                        <View>
                            {
                                this.state.ZindagiData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.ZindagiData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.ZindagiData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Bathukamma News */}
                    <View>
                        {/* Bathukamma  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        బతుకమ్మ
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Bathukamma") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Bathukamma  Cards*/}
                        <View>
                            {
                                this.state.BathukammaData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.BathukammaData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.BathukammaData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Tourism News */}
                    <View>
                        {/* Tourism   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        టూరిజం
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Tourism") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Tourism  Cards*/}
                        <View>
                            {

                                this.state.TourismData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.TourismData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.TourismData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Agriculture News */}
                    <View>
                        {/* Agriculture news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        వ్యవసాయం
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Agriculture") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Agriculture  Cards*/}
                        <View>
                            {
                                this.state.AgricultureData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.AgricultureData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.AgricultureData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* EditPage News */}
                    <View>
                        {/* EditPage   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        ఎడిట్‌ పేజీ
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("EditPage") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* EditPage  Cards*/}
                        <View>
                            {

                                this.state.EditpageData.length != 0 && { isLoading: true } ?
                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.EditpageData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.EditpageData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Sampadha News */}
                    <View>
                        {/* Sampadha   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        సంపద
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("EditPage") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Sampadha  Cards*/}
                        <View>
                            {

                                this.state.SampadhaData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.SampadhaData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.SampadhaData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* cooking News */}
                    <View>
                        {/* cooking news  text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        వంటలు
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Cooking") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* cooking  Cards*/}
                        <View>
                            {
                                this.state.CookingData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.CookingData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.CookingData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Stories News */}
                    <View>
                        {/* Stories   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        కథలు
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Kathalu") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Stories  Cards*/}
                        <View>
                            {

                                this.state.StoriesData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.StoriesData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.StoriesData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Health News */}
                    <View>
                        {/* Health   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        ఆరోగ్యం
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Health") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Health  Cards*/}
                        <View>
                            {

                                this.state.HealthData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.HealthData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.HealthData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Vaasthu News */}
                    <View>
                        {/* Vaasthu   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        వాస్తు
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Vaasthu") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Vaasthu  Cards*/}
                        <View>
                            {

                                this.state.VaasthuData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.VaasthuData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.VaasthuData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>

                    {/* Sahithyam News */}
                    <View>
                        {/* Sahithyam   text*/}
                        <View style={{ flexDirection: 'row', left: 10, marginRight: 10, flex: 2 }}>
                            <View style={{ flex: 1.7, flexDirection: 'row' }}>
                                <View style={{}}>
                                    <Text style={commonstyles.Category}>
                                        సాహిత్యం
                                    </Text>
                                </View>
                                <View style={commonstyles.dot}>
                                    <FontAwesome name="circle" size={10} color={appThemeColor} />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, top: 10 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Sahithyam") }}  >
                                    <Ionicons name="arrow-forward" size={25} color={blackcolor} style={{ justifyContent: 'center', }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Sahithyam  Cards*/}
                        <View>
                            {

                                this.state.SahithyamData.length != 0 && { isLoading: true } ?

                                    <View style={commonstyles.flatView}>
                                        <FlatList style={commonstyles.bgDarkGrey}
                                            showsHorizontalScrollIndicator={false}
                                            persistentScrollbar={false}
                                            numColumns={2}
                                            data={this.state.SahithyamData.data.slice(0, 2)}
                                            renderItem={({ item, index }) =>
                                                <View >
                                                    <View style={commonstyles.gridView}>
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.latestMainView}>
                                                                <View style={commonstyles.latestsubView}>
                                                                    <View>
                                                                        <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                    </View>
                                                                    <View>
                                                                        <Text numberOfLines={2} ellipsizeMode='tail'
                                                                            style={commonstyles.latestTxtTag}>{decode(item.title.rendered)}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            }
                                        />
                                        <View style={{ position: 'relative' }}>
                                            <FlatList
                                                showsHorizontalScrollIndicator={false}
                                                persistentScrollbar={false}
                                                data={this.state.SahithyamData.data.slice(2, 8)}
                                                horizontal={false}
                                                renderItem={({ item, index }) =>

                                                    <View >
                                                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Details", { data: item }) }}  >
                                                            <View style={commonstyles.cardViewHome}>
                                                                <View style={commonstyles.cateviewImg}>
                                                                    <FastImage source={{ uri: item.web_featured_image }} style={commonstyles.cateImage} />
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
                                    :
                                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
                                        <Text style={{ fontSize: 16, textAlign: "center", color: "#000000" }}>. . . Loading . . .</Text>
                                    </View>
                            }
                        </View>
                    </View>








                </ScrollView>


            </SafeAreaView>
        );
    }
}






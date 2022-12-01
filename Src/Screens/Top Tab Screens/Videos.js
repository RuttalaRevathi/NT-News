import React, { Component } from "react";
import { Text, View, FlatList, Image, ActivityIndicator, TouchableOpacity, ScrollView, SafeAreaView, Share } from "react-native";
import Header from "../../Custom Components/Header/Header";
import SubHeader from "../../Custom Components/SubHeader/SubHeader";
import { appThemeColor, commonstyles } from "../../Styles/CommonStyles";
import { BaseUrl, CategoryUrl, National, ShareUrl, Videos } from "../../Utilities/Api/Urls";
import moment from 'moment'
import FastImage from 'react-native-fast-image'

export default class VideosNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HyderabadData: [],
            isLoading: false
        }
    };
    componentDidMount() {
        fetch(BaseUrl + CategoryUrl + Videos).then((response) => response.json())
            .then(responseJson => {
                this.setState({ HyderabadData: responseJson, isLoading: true }, () => {
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    // share function
    sharecall = () => {
        const Link_Url = ShareUrl + Videos
        Share.share({
            message: Link_Url
        })
            .then((result) => console.log(result))
            .then((error) => console.log(error))
    }
    render() {
        const regex = /(<([^&#;>]+)>)/ig

        return (
            <SafeAreaView styles={commonstyles.container}>
                
                <SubHeader title={"వీడియోలు "} isMenu={false} isBook={false} isShare={true}
                    leftBtnClick={() => this.props.navigation.goBack()}
                    ShareClick={() => { this.sharecall() }}
                    BookClick={() => { alert("BookMark   Clicked") }}
                />
                <ScrollView style={commonstyles.cateflist}>
                    <View>
                        {

                            this.state.HyderabadData.length != 0 && { isLoading: true } ?

                                <View >
                                    <FlatList
                                        style={commonstyles.cateflist}
                                        data={this.state.HyderabadData.data}
                                        numColumns={2}
                                        renderItem={({ item, index }) =>

                                            <View style={{ flex: 1, }}>
                                                <View style={{}}>
                                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("VideoArticle", { data: item }) }}  >
                                                    <View style={commonstyles.latestMainView}>
                                                            <View style={commonstyles.latestsubView}>
                                                                <View>
                                                                    <FastImage style={commonstyles.latestimgTag} source={{ uri: item.web_featured_image }} />
                                                                </View>
                                                                <View>
                                                                <View style={{backgroundColor:'red',padding:5,bottom: 55, left:0, position:'absolute'}}>
                                                                <FastImage style={{ height: 15, width: 25,borderRadius:10 }}
                                                                source={require('../../Assets/Images/videoicon.png')} />
                                                                </View>
                                                                    <Text numberOfLines={2} ellipsizeMode='tail'
                                                                        style={commonstyles.latestTxtTag}>{item.title.rendered}
                                                                    </Text>
                                                                </View>
                                                            </View>
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
                </ScrollView>

                {
                    this.state.isLoading == false &&

                    <View style={commonstyles.loading}>
                        <ActivityIndicator color={appThemeColor} size='large' />
                    </View>
                }
            </SafeAreaView>
        )
    }
}
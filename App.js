
import React, { Component } from 'react';
import { StatusBar, View, Text, Share } from 'react-native';
import MainStack from './Src/Navigations/AppNavigator';
import NetInfo from "@react-native-community/netinfo";
import { appThemeColor, commonstyles, Header_text, whitecolor } from './Src/Styles/CommonStyles';
import AppNavigator from './Src/Navigations/AppNavigator';
import FastImage from 'react-native-fast-image'

// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      conn_status: false,
      showSplash: true

    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showSplash: false })
    }, 2000)
  }



  render() {
    return (
      <View style={commonstyles.container}>
        <StatusBar barStyle="dark-content" hidden={true} backgroundColor={Header_text} />

        {/* <View>
          {
            this.state.showSplash ?

              <View >
                <FastImage source={require('../NT-News/Src/Assets/Images/SPLASH-FINAL.png')}
                  style={{ width: '100%', height: '100%' }} />
              </View>
              :
              <AppNavigator />

          }
        </View> */}
        <AppNavigator/>

      </View>
    )
  }
}

import React, { Component } from 'react'
import { View, Text,Image } from 'react-native'

import HomeScreen from '../Screens/Home'
import { appThemeColor, commonstyles } from '../Styles/CommonStyles'


export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("")// go to Home page
        }, 500)
    }

    render() {
        return (


            <View >

                <Image source={require('../Assets/Images/SPLASH-FINAL.png')} 
                style={{width:'100%',height:'100%'}}/>
            </View>
        )
    }
}
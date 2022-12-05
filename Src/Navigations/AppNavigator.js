import * as React from 'react';
import { Dimensions, Image, Text, View, Linking, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import SideMenu from '../Sreens/SideMenu/SideMenu'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { appThemeColor, graycode, whitecolor, Dark_garycolor, blackcolor, light_blue, graycolor } from '../Styles/CommonStyles';
import Home from '../Screens/Home';
import SideMenu from '../Screens/SideMenu';
import LatestNews from '../Screens/Bottom Tab Screens/LatestNews';
import Epaper from '../Screens/Bottom Tab Screens/epaper';
import NewsArticle from '../Screens/NewsArticle';
import { Agriculture, Business, Hyderabad, Lifestyle, Varthalu } from '../Utilities/Api/Urls';
import HyderabadNews from '../Screens/Top Tab Screens/Hyderabad';
import NationalNews from '../Screens/Top Tab Screens/National';
import InternationalNews from '../Screens/Top Tab Screens/International';
import TelanganaNews from '../Screens/Top Tab Screens/Telangana';
import ApNews from '../Screens/Top Tab Screens/Ap';
import CinemaNews from '../Screens/Top Tab Screens/Cinema';
import SportsNews from '../Screens/Top Tab Screens/Sports';
import ChinthanaNews from '../Screens/Top Tab Screens/Chinthana';
import EducationNews from '../Screens/Top Tab Screens/Education';
import BusinessNews from '../Screens/Top Tab Screens/Business';
import SpecialNews from '../Screens/Top Tab Screens/Special';
import NriNews from '../Screens/Top Tab Screens/Nri';
import LifestyleNews from '../Screens/Top Tab Screens/LifeStyle';
import PhotosNews from '../Screens/Top Tab Screens/Photos';
import VideosNews from '../Screens/Top Tab Screens/Videos';
import MoreNews from '../Screens/Top Tab Screens/More';
import ScienceNews from '../Screens/Top Tab Screens/Science';
import CartoonNews from '../Screens/Top Tab Screens/Cartoon';
import EvergreenNews from '../Screens/Top Tab Screens/Evergreen';
import CrimeNews from '../Screens/Top Tab Screens/Crime';
import ZindagiNews from '../Screens/Top Tab Screens/Zindagi';
import BathukammaNews from '../Screens/Top Tab Screens/Bathukamma';
import TourismNews from '../Screens/Top Tab Screens/Tourism';
import SahithyamNews from '../Screens/Top Tab Screens/Sahithyam';
import VaasthuNews from '../Screens/Top Tab Screens/Vaasthu';
import HealthNews from '../Screens/Top Tab Screens/Health';
import KathaluNews from '../Screens/Top Tab Screens/Kathalu';
import CookingNews from '../Screens/Top Tab Screens/Cooking';
import SampadhaNews from '../Screens/Top Tab Screens/Sampadha';
import EditpageNews from '../Screens/Top Tab Screens/Editpage';
import AgricultureNews from '../Screens/Top Tab Screens/Agriculture';
import ContactUs from '../Screens/Contact Screens/ContactUs';
import AboutUs from '../Screens/Contact Screens/AboutUs';
import PrivacyPolicy from '../Screens/Contact Screens/PrivacyPolicy';
import Terms from '../Screens/Contact Screens/Terms';
import PhotoArticle from '../Screens/PhotoArticle';
import VarthaluNews from '../Screens/Top Tab Screens/Varthalu';
import VideoArticle from '../Screens/VideoArticle';
import Category from '../Screens/Top Tab Screens/Category';
import CartoonArticle from '../Screens/CartoonArticle';
import SplashScreen from '../Custom Components/Splash';
import Header from '../Custom Components/Header/Header';
import FastImage from 'react-native-fast-image';
import { HeaderStyle } from '../Custom Components/Header/Header.Styles';
import { sideMenuStyle } from '../Styles/SideMenuStyles'
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();


function BottomTab() {

  return (
    <Tab.Navigator
      screenOptions={({ focused }) => ({
        tabBarActiveTintColor: appThemeColor,
        tabBarInactiveTintColor: 'black',
        style: { backgroundColor: 'rgba(52, 52, 52, 0.8)' },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700', fontFamily: 'RobotoCondensed-Regular' },
        tabBarItemStyle: { width: 100, },
        tabBarStyle: {
          backgroundColor: '#d8f3fc', height: 45
        },
        tabBarOptions: {
          activeBackgroundColor: appThemeColor,
          inactiveBackgroundColor: appThemeColor,
          showLabel: true,
        }
      })}>
      <Tab.Screen
        name="TopTabs" component={TopTabs}
        options={{
          headerShown: false, tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Image style={{ height: 20, width: 20, tintColor: focused ? appThemeColor : 'black', top: 5 }}
              source={require('../Assets/Images/home.png')} />
          ),
        }} />
      <Tab.Screen
        name="LatestNews" component={LatestNews}
        options={{
          headerShown: false, tabBarLabel: 'Latest News',
          tabBarIcon: ({ color, focused }) => (
            <Image style={{ height: 20, width: 20, tintColor: focused ? appThemeColor : 'black', top: 5 }}
              source={require('../Assets/Images/topnews.png')} />
          ),
        }} />
      <Tab.Screen
        name="Photos" component={PhotosNews}
        options={{
          headerShown: false, tabBarLabel: 'Photo Gallery',
          tabBarIcon: ({ color, focused }) => (
            <Image style={{ height: 20, width: 20, tintColor: focused ? appThemeColor : 'black', top: 5 }}
              source={require('../Assets/Images/gallery.png')} />
          ),
        }} />
      <Tab.Screen name="Epaper" component={Epaper}
        options={{
          headerShown: false, tabBarLabel: 'e-Paper',
          tabBarButton: props => (
            <TouchableOpacity {...props} onPress={() => { Linking.openURL('https://epaper.ntnews.com/') }} />
          ),

          tabBarIcon: ({ color, focused }) => (
            <Image style={{ height: 20, width: 20, tintColor: focused ? appThemeColor : 'black', top: 5 }}
              source={require('../Assets/Images/paper.png')} />
          ),
        }} />


    </Tab.Navigator>

    // </NavigationContainer>


  );

}

const Stack = createStackNavigator();
function MainStack({ }) {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* <Stack.Screen name="splash" component={SplashScreen} /> */}
      <Stack.Screen name="appDrawer" component={AppDrawer} />
      {/* <Stack.Screen name="Category" component={Category} /> */}
      <Stack.Screen name="Details" component={NewsArticle} />
      <Stack.Screen name="PhotoGalleryArticle" component={PhotoArticle} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="CartoonArticle" component={CartoonArticle} />


    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function AppDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomSideMenu {...props} />}>
      <Drawer.Screen name='bottomTabs' component={BottomTab}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: appThemeColor,
          },
          headerRight: () => (

            <View style={{
              justifyContent: 'center', alignItems: 'center', backgroundColor: whitecolor,
              borderRadius: 50, height: 30, width: 30, marginRight: 10
            }}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("LatestNews");
              }} >
                <Image
                  style={{ height: 20, width: 20, left: 2 }}
                  source={require('../Assets/Images/bell.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <View style={{
              justifyContent: 'center', alignItems: 'center', backgroundColor: whitecolor,
              borderRadius: 50, height: 30, width: 30, marginLeft: 10
            }}>
              <TouchableOpacity onPress={() => {
                navigation.toggleDrawer();
              }} >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>

          ),
          headerTitle: () => (

            <View style={{ justifyContent: 'center', alignItems: 'center', width: Dimensions.get("window").width - 120, }}>
              <Image
                style={{ height: 40, width: 160 }}
                source={require('../Assets/Images/logo.png')}
              />
            </View>
          )
        })} />
    </Drawer.Navigator>

  )
}
const CustomSideMenu = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ flex: 1, paddingTop: 20, backgroundColor: graycolor, }}>
    {/* <DrawerItemList {...props} /> */}
    {/* <DrawerItem
      label="Close drawer"
      onPress={() => props.navigation.closeDrawer()}
    />
    <DrawerItem
      label="Toggle drawer"
      onPress={() => props.navigation.toggleDrawer()}
    /> */}
 <View style={{ backgroundColor: appThemeColor, flexDirection: 'row' }}>
          <View style={{ width: '90%' }}>
            <Text style={sideMenuStyle.sectionsText}>Sections</Text>
          </View>
          <View >
            <TouchableOpacity onPress={() => {
              props.navigation.closeDrawer()
            }}>
              <AntDesign name="close" size={23} color={whitecolor} style={{ top: 5, alignSelf: 'flex-end', justifyContent: 'center' }} />
            </TouchableOpacity>
          </View>
        </View>
    <DrawerItem style={sideMenuStyle.item}

      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/homeblack.png')} style={sideMenuStyle.icon} />
      }
      label="హోమ్"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Home")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/varthalu.png')} style={sideMenuStyle.icon} />
      }
      label={({ color }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View>
            <Text style={sideMenuStyle.text}>వార్తలు</Text>
          </View>

        </View>
      )}
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Varthalu")
      }}

    />


    <DrawerItem style={sideMenuStyle.item}

      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/hyderabad.png')} style={sideMenuStyle.icon} />
      }
      label="హైదరాబాద్"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Hyderabad")
      }}
    />

    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/national.png')} style={sideMenuStyle.icon} />
      }
      label="జాతీయం"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("National")
      }}
    />

    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/international.png')} style={sideMenuStyle.icon} />
      }
      label="అంతర్జాతీయం"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("InterNational")
      }}
    />

    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/telangana.png')} style={sideMenuStyle.icon} />
      }
      label="తెలంగాణ"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Telangana")
      }}
    />

    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/ap.png')} style={sideMenuStyle.icon} />
      }
      label="ఏపీ"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Ap")
      }}
    />

    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/cinema.png')} style={sideMenuStyle.icon} />
      }
      label="సినిమా"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Cinema")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/sports.png')} style={sideMenuStyle.icon} />
      }
      label="స్పోర్ట్స్"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Sports")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/chinthana.png')} style={sideMenuStyle.icon} />
      }
      label="చింతన"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Chinthana")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/education.png')} style={sideMenuStyle.icon} />
      }
      label="ఎడ్యుకేషన్ & కెరీర్"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Education")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/business.png')} style={sideMenuStyle.icon} />
      }
      label="బిజినెస్"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Business")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/special.png')} style={sideMenuStyle.icon} />
      }
      label="ప్రత్యేకం"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Special")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/nri.png')} style={sideMenuStyle.icon} />
      }
      label="ఎన్‌ఆర్‌ఐ"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Nri")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/lifestyle.png')} style={sideMenuStyle.icon} />
      }
      label="లైఫ్‌స్టైల్"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("LifeStyle")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/photos.png')} style={sideMenuStyle.icon} />
      }
      label="ఫొటోలు"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Photos")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/video.png')} style={sideMenuStyle.icon} />
      }
      label="వీడియోలు"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Videos")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/more.png')} style={sideMenuStyle.icon} />
      }

      label={({ color }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View>
            <Text style={sideMenuStyle.text}>మరిన్ని</Text>
          </View>
          {/* <TouchableOpacity onPress={() => {
                                      this.NestedDrawerItem()
                                  }}>
                                      <AntDesign name="caretdown" size={15} color={blackcolor} style={{ top: 5 }} />
                                  </TouchableOpacity> */}
        </View>
      )}
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("More")
      }}
    />

    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/science.png')} style={sideMenuStyle.icon} />
      }
      label="సైన్స్‌ అండ్‌ టెక్నాలజీ"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Science")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/cartoon.png')} style={sideMenuStyle.icon} />
      }
      label="కార్టూన్‌"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Cartoon")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/evergreen.png')} style={sideMenuStyle.icon} />
      }
      label="ఎవర్‌గ్రీన్‌"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("EverGreen")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/crime.png')} style={sideMenuStyle.icon} />
      }
      label="క్రైమ్‌"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Crime")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/zindagi.png')} style={sideMenuStyle.icon} />
      }
      label="జిందగీ"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Zindagi")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/bathukamma.png')} style={sideMenuStyle.icon} />
      }
      label="బతుకమ్మ"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Bathukamma")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/tourism.png')} style={sideMenuStyle.icon} />
      }
      label="టూరిజం"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Tourism")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/agriculture.png')} style={sideMenuStyle.icon} />
      }
      label="వ్యవసాయం"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Agriculture")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/editpage.png')} style={sideMenuStyle.icon} />
      }
      label="ఎడిట్‌ పేజీ"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("EditPage")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/sampadha.png')} style={sideMenuStyle.icon} />
      }
      label="సంపద"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Sampadha")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/cooking.png')} style={sideMenuStyle.icon} />
      }
      label="వంటలు"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Cooking")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/kathalu.png')} style={sideMenuStyle.icon} />
      }
      label="కథలు"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Kathalu")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/health.png')} style={sideMenuStyle.icon} />
      }
      label="ఆరోగ్యం"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Health")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}

      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/vaasthu.png')} style={sideMenuStyle.icon} />
      }
      label="వాస్తు"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Vaasthu")
      }}
    />


    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/sahithyam.png')} style={sideMenuStyle.icon} />
      }
      label="సాహిత్యం"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Sahithyam")
      }}
    />



    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/contact.png')} style={sideMenuStyle.icon} />
      }
      label="Contact Us"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Contact")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/about.png')} style={sideMenuStyle.icon} />
      }
      label="About Us"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("About")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/privacy.png')} style={sideMenuStyle.icon} />
      }
      label="Privacy Policy"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Privacy")
      }}
    />
    <DrawerItem style={sideMenuStyle.item}
      icon={({ color, size }) =>
        <Image source={require('../Assets/Images/sidemenuIcons/conditions.png')} style={sideMenuStyle.icon} />
      }
      label="Terms and Conditions"
      labelStyle={sideMenuStyle.text}
      onPress={() => {
        props.navigation.navigate("Terms")
      }}
    />

  </DrawerContentScrollView>
  )
}
const TopTab = createMaterialTopTabNavigator();
function TopTabs() {
  return (


    <TopTab.Navigator
      // tabBarPosition="top"
      // tabBar={(props) =>}
      screenOptions={({ focused }) => ({
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: appThemeColor,
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 20, fontFamily: 'Mandali-Bold' },
        tabBarStyle: {
          backgroundColor: light_blue, height: 50,
        },
        tabBarItemStyle: {

          width: 'auto',
          alignItems: 'flex-start',
        },
        tabBarOptions: {
          showLabel: true,
        }

      })}

    >
      {/* <TopTab.Screen name="Home" component={Home} /> */}
      <TopTab.Screen name="వార్తలు" component={Home} />
      <TopTab.Screen name="హైదరాబాద్‌" component={HyderabadNews} />
      <TopTab.Screen name="జాతీయం" component={NationalNews} />
      <TopTab.Screen name="అంతర్జాతీయం" component={InternationalNews} />
      <TopTab.Screen name="తెలంగాణ" component={TelanganaNews} />
      <TopTab.Screen name="ఏపీ" component={ApNews} />
      <TopTab.Screen name="సినిమా" component={CinemaNews} />
      <TopTab.Screen name="స్పోర్ట్స్" component={SportsNews} />
      <TopTab.Screen name="చింతన" component={ChinthanaNews} />
      <TopTab.Screen name="ఎడ్యుకేషన్ & కెరీర్‌" component={EducationNews} />
      <TopTab.Screen name="బిజినెస్" component={BusinessNews} />
      <TopTab.Screen name="ప్రత్యేకం" component={SpecialNews} />
      <TopTab.Screen name="ఎన్‌ఆర్‌ఐ" component={NriNews} />
      <TopTab.Screen name="లైఫ్‌స్టైల్‌" component={LifestyleNews} />
      <TopTab.Screen name="ఫొటోలు" component={PhotosNews} />
      <TopTab.Screen name="వీడియోలు" component={VideosNews} />
      <TopTab.Screen name="మరిన్ని" component={MoreNews} />
      <TopTab.Screen name="సైన్స్‌ అండ్‌ టెక్నాలజీ" component={ScienceNews} />
      <TopTab.Screen name="కార్టూన్‌" component={CartoonNews} />
      <TopTab.Screen name="ఎవర్‌గ్రీన్‌" component={EvergreenNews} />
      <TopTab.Screen name="క్రైమ్‌" component={CrimeNews} />
      <TopTab.Screen name="జిందగీ" component={ZindagiNews} />
      <TopTab.Screen name="బతుకమ్మ" component={BathukammaNews} />
      <TopTab.Screen name="టూరిజం" component={TourismNews} />
      <TopTab.Screen name="వ్యవసాయం" component={AgricultureNews} />
      <TopTab.Screen name="ఎడిట్‌ పేజీ" component={EditpageNews} />
      <TopTab.Screen name="సంపద" component={SampadhaNews} />
      <TopTab.Screen name="వంటలు" component={CookingNews} />
      <TopTab.Screen name="కథలు" component={KathaluNews} />
      <TopTab.Screen name="ఆరోగ్యం" component={HealthNews} />
      <TopTab.Screen name="వాస్తు" component={VaasthuNews} />
      <TopTab.Screen name="సాహిత్యం" component={SahithyamNews} />
    </TopTab.Navigator>
    // </View>

  )
}

export default function AppNavigator(props, { navigation }) {

  return (
    <NavigationContainer >
      <MainStack />
      {/* <AppDrawer/> */}
    </NavigationContainer>
  );

};

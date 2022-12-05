import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView, TouchableHighlight } from 'react-native'
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../Styles/CommonStyles'
import { sideMenuStyle } from '../Styles/SideMenuStyles'
import AntDesign from 'react-native-vector-icons/AntDesign'


function SideMenu(props) {
  return (
    <DrawerContentScrollView {...props} style={{ flex: 1, paddingTop: 20, backgroundColor: graycolor, }}>

      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      {/* <View style={{ flex: 1, paddingTop: 20, backgroundColor: graycolor, }}> */}
        <View style={{ backgroundColor: appThemeColor, flexDirection: 'row' }}>
          <View style={{ width: '90%' }}>
            <Text style={sideMenuStyle.sectionsText}>Sections</Text>
          </View>
          <View >
            <TouchableOpacity onPress={() => {
              this.props.navigation.goBack()
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
export default SideMenu;
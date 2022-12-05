import { StyleSheet, Dimensions } from 'react-native';
// export const appThemeColor = "#337DFF"
//3349FF,339fff
export const appThemeColor = "#262A85";
export const whitecolor = "#FFFFFF"
export const graycolor = "#e4e3e3"
export const Dark_graycolor = "#808080"
export const blackcolor = "#000"
// export const gallerycolor = "#FFC300"
export const gallerycolor = "#696AAA"
export const light_blue = "#d8f3fc"
export const dark_blue = "#bae6f5"
export const Header_text = "#262A85"
export const Header_BG_Color = "#030533"
export const TimeStamp = "#8D8D8D"
export const Gary_Light = "#ecf1f5"
export const shadow_color = "#ccc"
export const grid_color = "#F2D7EE"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const commonstyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: whitecolor
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
  },
  menuview: {
    // backgroundColor: appThemeColor,
    alignItems: 'center',
    marginRight: 10,
    left: 20
  },
  menutext: {
    // backgroundColor: whitecolor,
    paddingHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    color: blackcolor,
    fontSize: 22,
    fontFamily: "Mandali-Bold",
    // fontWeight: '500'
  },
  latestMainView: { width: Dimensions.get('window').width / 2.2, margin: 5 },
  latestsubView: {
    backgroundColor: whitecolor,
    height: 170, borderRadius: 5,
    borderBottomColor: shadow_color, borderBottomWidth: 2,
    borderLeftColor: shadow_color, borderLeftWidth: 1,
    borderRightColor: shadow_color, borderRightWidth: 1
  },
  latestimgTag: { width: '100%', height: 100, borderTopLeftRadius: 5, borderTopRightRadius: 5, borderRightColor: shadow_color, borderRightWidth: 1 },
  latestTxtTag: { color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 20, lineHeight: 33, left: 5, right: 2, paddingRight: 20 },
  slidercard: {
    height: 200,
    width: screenWidth - 10,
    borderRadius: 15,

  },
  photocard: {
    height: Dimensions.get('window').height * 0.32,
    // width: screenWidth - 50,
    // width: '100%',
    // flex: 1,
    // margin: 5,
    // marginLeft: 5,
    // marginRight: 5,
    resizeMode: "contain",
    aspectRatio: 10 / 9,
    borderRadius: 5,
    // padding:10

  },
  slidertext: {
    color: whitecolor,
    fontFamily: 'Mandali-Bold',
    // fontWeight:'bold',
    fontSize: 22,
    // marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    top: 50,
    position: 'relative'
  },
  photoview: {
    backgroundColor: gallerycolor,
    borderRadius: 10, margin: 5,
    width: '97%', paddingBottom: 10, marginTop: 10
  },
  phototextview: {
    flexDirection: 'row', paddingLeft: 10,
    paddingRight: 10, paddingTop: 10, flex: 1
  },
  ptext: {
    color: whitecolor, fontSize: 25,
    marginEnd: 5, fontFamily: 'Mandali-Bold'
  },
  phototext: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    // fontWeight:'bold',
    fontSize: 22,
    // marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    position: 'relative',
    top: 25
  },
  sliderGradient: {
    width: '100%', flex: 1.5, bottom: 0, borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute', height: 100
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 100,
    width: "100%",
    position: 'absolute',
    bottom: 0,
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

  },
  Category: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 27,
    top: 8,
    left: 10
    // fontWeight: '400'

  },
  sliderView: {
    position: 'relative', backgroundColor: 'transparent',
    opacity: 0.8
  },
  dot: {
    marginTop: 22, marginLeft: 15
  },
  latestCard: {
    backgroundColor: "#fff",
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  latestImage: {
    width: "100%", height: screenHeight * 0.12,
    borderRadius: 10
  },
  cateView: { flexDirection: 'row', marginLeft: 5, width: '100%' },
  cateImage: { width: 120, height: 90, borderRadius: 10, },
  latestText: { color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 20, lineHeight: 33, },
  latesttime: { color: appThemeColor, fontSize: 16, fontFamily: 'JIMS', },

  cardViewFirst: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  cardView: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  latestViewcard: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    width: '100%',
    // height:120,
    borderRadius: 10,
    // flexDirection: 'row',
    // flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,

  },
  cardViewHome: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderBottomColor: shadow_color, borderBottomWidth: 2,
    borderLeftColor: shadow_color, borderLeftWidth: 1,
    borderRightColor: shadow_color, borderRightWidth: 1

  },
  cinemaText: {
    // color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 29,
    color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 30,
  },
  SportCard: {
    flex: 1,
    backgroundColor: "#fff",
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: 170,
    // height: Dimensions.get('window').height * 0.12,
    flexDirection: 'row'
  },

  sportimage: {
    height: Dimensions.get('window').height * 0.12,
    borderRadius: 10, resizeMode: "center",
  },
  CartoonCard: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "#fff",
    elevation: 1,
    margin: 10,
    borderRadius: 5,
    height: 'auto',
    flexDirection: 'row',
    paddingRight: 10
  },
  pcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: "#fff",
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.32,
    flexDirection: 'row'
  },
  vcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: whitecolor,
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.3,
    flexDirection: 'row'
  },
  pimg: {
    width: "98%", height: 180,
    borderRadius: 10, resizeMode: "contain", margin: 5
    // width: '100%', height: 280, resizeMode: "contain",

  },
  vimg: {
    width: "96%", height: 180,
    borderRadius: 10, resizeMode: "contain", margin: 5
    // width: '100%', height: 280, resizeMode: "contain",

  },
  cartoonimg: {
    width: Dimensions.get('window').height * 0.23,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 4
  },
  photoimage: {
    width: "110%",
    height: Dimensions.get('window').height * 0.13,
    borderRadius: 15,
    resizeMode: "center",
  },
  SportText: {
    color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 18, lineHeight: 25, margin: 5
  },
  Detailslargecard: {
    flex: 1,
    height: 230,
    margin: 10,
    borderRadius: 10
  },
  detailTime: {
    color: TimeStamp,
    fontFamily: 'JIMS',
    fontSize: 20

  },
  timeview: {
    flexDirection: 'row',
    top: -5
  },
  cateviewText: {
    flex: 1.9,
    fontFamily: 'Mandali-Regular', fontSize: 20, lineHeight: 33, justifyContent: 'center'
  },
  cateviewImg: { marginRight: 5 },
  cateflist: { paddingBottom: 150, top: 10, margin: 5 },
  cateflist: { paddingBottom: 50, top: 10, margin: 5 },

  videoImg: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 10, resizeMode: "stretch",
  },
  categoryView: { flex: 1.7, flexDirection: 'row', },
  flatView: { position: 'relative', margin: 5, justifyContent: 'center', display: 'flex' },
  bgDarkGrey: {
    width: '100%', backgroundColor: '#85929e', paddingTop: 10,
    paddingBottom: 10, paddingRight: 3, paddingLeft: 3,
    borderTopLeftRadius: 8, borderTopRightRadius: 8
  },
  prevText: {
    borderBottomColor: appThemeColor, borderBottomWidth: 1, color: appThemeColor,
    textAlign: 'center', fontFamily: 'Mandali-Bold', fontSize: 18,
    fontFamily: 'RobotoCondensed-Regular'
  },
  prevNextMainView:{
    flexDirection:'row',flex:1,
  justifyContent:'space-between',
  marginTop:5,marginBottom:5
},
  prevView:{flex:0.25,height:30,justifyContent:'center',marginLeft:10},
  nextView:{flex:0.2,height:30,justifyContent:'center',marginRight:10},
  relatedText:{ color: '#000', fontSize: 22, fontFamily: 'RobotoCondensed-Regular' }

})
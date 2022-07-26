/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  ic_heart,
  ic_House,
  ic_Search,
  ic_sharp_history,
  ic_Shopping_cart,
  ic_User,
  ic_Vector,
  img_Mask,
} from '../../assets/icons';
import CUSTOM_COLOR from '../../constants/colors';
import SCREEN_NAME from '../../constants/screen';
import scale from '../../constants/scales';
import FONT_FAMILY from '../../constants/fonts';

const HomeScreen = props => {
  const {navigation} = props;
  const onTransitToList = () => {
    navigation.navigate(SCREEN_NAME.PRODUCT_LIST);
  };
  const [onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Icon image top */}
      <>
        <View style={styles.icContainer}>
          <View style={{flex: 1}}>
            <Image source={ic_Vector} />
          </View>
          <View>
            <Image source={ic_Shopping_cart} />
          </View>
        </View>
      </>
      {/* Title */}
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delicious food for you'}</Text>
        </View>
      </>
      {/* Bar Search */}
      <>
        <View style={styles.barSearchContainer}>
          <View style={styles.barSearchShape}>
            <View style={{marginLeft: 35, marginRight: 16}}>
              <Image source={ic_Search} />
            </View>
            <View style={{flex: 5}}>
              <TextInput
                style={styles.titleSearch}
                onChangeText={onChangeText}
                placeholder={'Search'}
              />
            </View>
          </View>
        </View>
      </>
      {/* </View> */}

      {/* Mid */}
      {/* <View styles={styles.MidContainer}> */}
      {/* Content */}
      {/* TextContent */}
      <>
        <View style={styles.TextContent}>
          <ScrollView horizontal={true}>
            <TouchableOpacity activeOpacity={0.7} onPress={onTransitToList}>
              <View style={styles.TextSpace}>
                <Text style={styles.TextStyle}>{'Foods'}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.TextSpace}>
              <Text style={styles.TextStyle}>{'Drinks'}</Text>
            </View>
            <View style={styles.TextSpace}>
              <Text style={styles.TextStyle}>{'Snacks'}</Text>
            </View>
            <View style={styles.TextSpace}>
              <Text style={styles.TextStyle}>{'Sauce'}</Text>
            </View>
          </ScrollView>
        </View>
      </>
      {/* ImageContent */}
      <>
        {/* <SafeAreaView style={styles.ImageContent}> */}
        <ScrollView horizontal={true}>
          <View style={styles.ImgSpace}>
            <Image style={styles.ImgMask} source={img_Mask} />
          </View>
          <View style={styles.ImgSpace}>
            <Image style={styles.ImgMask} source={img_Mask} />
          </View>
          <View style={styles.ImgSpace}>
            <Image style={styles.ImgMask} source={img_Mask} />
          </View>
        </ScrollView>
        {/* </SafeAreaView> */}
      </>
      {/* </View> */}

      {/* BottomContainer */}
      <View style={styles.BottomContainer}>
        {/* Icon Tab */}
        <View style={styles.icTabContainer}>
          <View style={styles.icTab}>
            <Image source={ic_House} />
          </View>
          <View style={styles.icTab}>
            <Image source={ic_heart} />
          </View>
          <View style={styles.icTab}>
            <Image source={ic_User} />
          </View>
          <View style={styles.icTab}>
            <Image source={ic_sharp_history} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'space-between',
    backgroundColor: CUSTOM_COLOR.Silver,
  },

  icContainer: {
    flexDirection: 'row',
    marginTop: scale(65),
    marginLeft: scale(54.6),
    marginRight: scale(42),
  },
  titleContainer: {
    marginLeft: scale(50),
    marginTop: scale(43.33),
    width: scale(215),
    height: scale(105),
    backgroundColor: CUSTOM_COLOR.Silver,
  },
  title: {
    fontSize: 34,
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.SFProRounded_Bold,
  },
  barSearchContainer: {
    marginTop: scale(28),
    marginLeft: scale(50),
    width: scale(314),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  barSearchShape: {
    width: scale(314),
    height: scale(60),
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: CUSTOM_COLOR.CornflowerBlue,
  },

  titleSearch: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.SFProRounded_Semibold,
    color: CUSTOM_COLOR.Black,
  },

  //   MidContainer: {
  //     marginTop: scale(46),
  //     justifyContent: 'flex-start',
  //     alignSelf: 'flex-start',
  //     flex: 1,
  //   },
  ContentContainer: {},
  TextContent: {
    marginTop: scale(46),
    marginLeft: scale(40),
    flexDirection: 'row',
    backgroundColor: CUSTOM_COLOR.Silver,
  },
  TextSpace: {
    //marginTop: scale(46),
    marginLeft: scale(41),
  },
  TextStyle: {
    fontFamily: FONT_FAMILY.SFProText_Regular,
    fontSize: 17,
    color: CUSTOM_COLOR.Manatee,
  },
  ImageContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:CUSTOM_COLOR.CornflowerBlue,
  },
  ImgSpace: {
    flex: 1,
  },
  ImgMask: {
    height: scale(321),
    width: scale(220),
    resizeMode: 'contain',
  },
  BottomContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  icTabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(53.12),
    marginBottom: scale(50.1),
  },
  icTab: {
    flex: 1,
  },
});
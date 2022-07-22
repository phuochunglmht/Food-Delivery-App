import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FONT_FAMILY from './src/constants/fonts';
import CUSTOM_COLOR from './src/constants/colors';
import {
  IC_Vector,
  IC_ShoppingCart,
  IC_Search,
  IC_House,
  IC_Heart,
  IC_User,
  IC_Refresh,
} from './src/assets/icons';
import {IMG_FoodImage} from './src/assets/images';
const App = () => {
  return (
    // Background
    <SafeAreaView style={styles.backgroundContainer}>
      {/* Bar */}
      <View style={styles.vectorContainer}>
        <Image
          source={IC_Vector}
          style={styles.vector}
          resizeMode={'contain'}
        />
      </View>
      {/* ShoppingCart */}
      <View style={styles.shoppingCartContainer}>
        <Image
          source={IC_ShoppingCart}
          style={styles.shoppingCart}
          resizeMode={'contain'}
        />
      </View>
      {/* FoodText */}
      <View style={styles.foodTextContainer}>
        <Text style={styles.foodText}>Delicious food for you</Text>
      </View>
      {/* Rectangle */}
      <View style={styles.rectangleContainer}>
        <Image
          source={IC_Search}
          style={styles.searchIcon}
          resizeMode={'contain'}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={CUSTOM_COLOR.Black}
          style={styles.inputSearchText}
        />
      </View>
      {/* ScrollView */}
      <ScrollView horizontal style={styles.ScrollViewStyle}>
        <View style={styles.scrollViewBox}>
          <View style={styles.foodImageContainer}>
            <Image
              source={IMG_FoodImage}
              style={styles.foodImageStyle}
              resizeMode={'contain'}
            />
          </View>
          <Text style={styles.foodName}>Veggie tomato mix</Text>
          <Text style={styles.foodPrice}>N1,900</Text>
        </View>
        <View style={styles.scrollViewBox}>
          <View style={styles.foodImageContainer}>
            <Image
              source={IMG_FoodImage}
              style={styles.foodImageStyle}
              resizeMode={'cover'}
            />
          </View>
          <Text style={styles.foodName}>Veggie tomato mix</Text>
          <Text style={styles.foodPrice}>N1,900</Text>
        </View>
        <View style={styles.scrollViewBox}>
          <View style={styles.foodImageContainer}>
            <Image
              source={IMG_FoodImage}
              style={styles.foodImageStyle}
              resizeMode={'cover'}
            />
          </View>
          <Text style={styles.foodName}>Veggie tomato mix</Text>
          <Text style={styles.foodPrice}>N1,900</Text>
        </View>
      </ScrollView>
      <View style={styles.iconSection}>
        <TouchableOpacity>
          <Image source={IC_House} resizeMode={'cover'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IC_Heart} resizeMode={'cover'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IC_User} resizeMode={'cover'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IC_Refresh} opacity={0.3} resizeMode={'cover'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Silver,
  },
  foodTextContainer: {
    position: 'absolute',
    width: 230,
    height: 90,
    left: 50,
    top: 132,
  },
  foodText: {
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 40.57,
    color: CUSTOM_COLOR.Black,
  },
  vectorContainer: {
    position: 'absolute',
    width: 22,
    height: 14.67,
    left: 54.6,
    top: 74,
  },
  vector: {
    borderCenterWidth: 2,
    borderStyle: 'solid',
    borderColor: CUSTOM_COLOR.Black,
  },
  shoppingCartContainer: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 65,
    left: 350,
  },
  shoppingCart: {
    opacity: 0.3,
  },
  rectangleContainer: {
    position: 'absolute',
    width: 314,
    height: 60,
    left: 50,
    top: 242,
    backgroundColor: CUSTOM_COLOR.Gallery,
    borderColor: CUSTOM_COLOR.Gallery,
    borderRadius: 30,
  },
  searchIcon: {
    position: 'absolute',
    top: 21,
    left: 35,
    width: 18,
    height: 18,
    borderCenterWidth: 2,
    borderColor: CUSTOM_COLOR.Black,
    borderStyle: 'solid',
  },
  inputSearchText: {
    width: 200,
    marginTop: 8.5,
    marginLeft: 69,
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'normal',
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
    lineHeight: 15,
    opacity: 0.5,
  },
  ScrollViewStyle: {
    position: 'absolute',
    top: 430,
    height: 330,
  },
  scrollViewBox: {
    alignSelf: 'flex-end',
    width: 220,
    height: 270,
    backgroundColor: CUSTOM_COLOR.white,
    borderRadius: 30,
    shadowColor: CUSTOM_COLOR.MineShaft,
    shadowOffset: {width: 0, height: 30},
    shadowRadius: 60,
    shadowOpacity: 0.1,
    marginHorizontal: 25,
    justifyContent: 'center',
  },
  foodImageContainer: {
    position: 'absolute',
    top: -60,
  },
  foodImageStyle: {
    position: 'absolute',
    marginHorizontal: 24,
    height: 164,
    width: 164,
    zIndex: 5,
    elevation: 5,
    borderRadius: 9999,
    padding: 0,
  },
  foodName: {
    position: 'relative',
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 22,
    lineHeight: 22,
    top: 30,
    width: 130,
    height: 55,
    color: CUSTOM_COLOR.Black,
    opacity: 0.9,
    textAlign: 'center',
  },
  foodPrice: {
    color: CUSTOM_COLOR.Vermillion,
    fontFamily: FONT_FAMILY.Bold,
    fontStyle: 'Bold',
    fontSize: 17,
    alignSelf: 'center',
    top: 50,
  },
  iconSection: {
    top: 760,
    height: 75,
    backgroundColor: CUSTOM_COLOR.Silver,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
});

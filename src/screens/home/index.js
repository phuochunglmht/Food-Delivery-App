import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {
  IC_Heart,
  IC_Vector,
  IC_ShoppingCart,
  IC_Refresh,
  IC_User,
  IC_House,
  IC_Search,
} from '../../assets/icons';
import CUSTOM_COLOR from '../../constants/colors';
import {IMG_FoodImage} from '../../assets/images';
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

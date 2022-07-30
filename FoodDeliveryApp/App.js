import React from 'react';
import LoginScreen from './source/screen/login';
import Onboarding from './source/screen/onboarding';
import HomeScreen from './source/screen/home';
import CartScreen from './source/screen/cart';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
import CheckOut2Screen from './source/screen/checkout/checkout2';
import SearchScreen from './source/screen/search';
import HistoryScreen from './source/screen/history';
import OrderScreen from './source/screen/order';
import NoWifiScreen from './source/screen/nowifi';
import HomeScreen2 from './source/screen/home2';
import LoadingScreen from './source/screen/loading';
import FoodInfoScreen from './source/screen/foodinfo';
import MyInFoScreen from './source/screen/myinfo';


const Stack = createNativeStackNavigator();

const config = {
  animation: 'instant',
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyInFo" component={MyInFoScreen} />
        <Stack.Screen name="FoodInFo" component={FoodInfoScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
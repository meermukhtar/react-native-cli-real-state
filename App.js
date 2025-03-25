import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoardScreen from './src/screens/DashBoardScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SignInScreen from './src/screens/SignInScreen';
import VerifyAccount from './src/screens/VerifyAccount';
import ProductDetail from './src/screens/ProductDetail';
import CartScreen from './src/screens/CartScreen';
import DrawerScreen from './src/components/DrawerScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import SignUpScreen from './src/screens/SignUpScreen';
import Upload from './src/screens/Upload';
import { CartProvider } from './src/components/CartContext';
import Toast from 'react-native-toast-message';
import AddressCheck from './src/screens/AddressCheck';
import OrderSuccess from './src/screens/OrderSuccess';
import ProfileScreen from './src/screens/ProfileScreen';
import OrderHistory from './src/screens/OrderHistory';
import CardsClone from './src/screens/CardsClone';
import { configureGoogleSignIn } from './src/config/FirebaseConfig';
import { useEffect } from 'react';
// import {_signInWithGoogle} from './src/config/auth/Index'
const Stack = createNativeStackNavigator();

export default function App() {
  // useEffect(() => {
  //   _signInWithGoogle();

  // }, []);
  return (
    <>
    
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Stack Screens */}
       
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Upload" component={Upload} />
        {/* Use DrawerNavigator inside Stack */}
        <Stack.Screen
          name="DashBoardScreen"
          component={DrawerScreen}
          options={{headerShadowVisible: false}}
        />
      <Stack.Screen name="AddressCheck" component={AddressCheck}/>
      <Stack.Screen name="OrderSuccess" component={OrderSuccess}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Stack.Screen name="OrderHistory" component={OrderHistory}/>
      <Stack.Screen name="CardsClone" component={CardsClone}/>
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>

    <Toast/>
    </>
    
  );
}

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashBoardScreen from '../screens/DashBoardScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetail from '../screens/ProductDetail';
import {useNavigation} from '@react-navigation/native';
import MyTabs from '../components/MyTabs';
import OrderHistory from '../screens/OrderHistory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logoutUser from '../config/auth/LogOut';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const navigation = useNavigation();
  // const [message, setMessage] = useState('');

  const handleLogout = async () => {
    const success = await logoutUser();
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('userEmail');
      navigation.replace('SignInScreen');
    } catch (error) {
      console.error('Error logging out:', error);
    }
    if (success) {
      navigation.replace('SignInScreen'); // Redirect to login
    } else {
      alert('Logout failed');
    }
  };

  
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
        {/* Drawer Header */}
        <View className="bg-slate-200 p-4 justify-center content-center">
          <View className="flex-row items-center h-[22%] ">
            <View className="justify-center items-center bg-black rounded-full w-20 h-20">
              <Image
                source={require('../asset/images/google.png')}
                className="h-20 w-20 rounded-full "
                resizeMode="contain"
              />
            </View>

            {/* Name Text */}

            <View>
              <Text className="text-black font-bold text-2xl ml-4">Xyz</Text>
              <Text className="text-black font-semibold  ml-4">
                xyz@gmail.com
              </Text>
            </View>
          </View>
        </View>

        {/* Drawer Items */}
        <View>
          <TouchableOpacity onPress={() => console.log('DashBoard Press')}>
            <View className="flex-row justify-between p-5">
              <View className="flex-row ">
                <Image
                  source={require('../asset/drawer/dashboard.png')}
                  className="h-7 w-7 rounded-xl"
                />
                <Text className="text-black font-semibold ml-5 text-xl">
                  DashBoard
                </Text>
              </View>

              <Image
                source={require('../asset/images/forward.png')}
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => console.log('shopping cart press')}>
            <View className="flex-row justify-between p-5">
              <View className="flex-row ">
                <Image
                  source={require('../asset/drawer/cart1.png')}
                  className="h-7 w-7 rounded-xl"
                />
                <Text className="text-black font-semibold ml-5 text-xl">
                  Shopping Cart
                </Text>
              </View>

              <Image
                source={require('../asset/images/forward.png')}
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')}>
            <View className="flex-row justify-between p-5">
              <View className="flex-row ">
                <Image
                  source={require('../asset/drawer/history.png')}
                  className="h-7 w-7 rounded-xl"
                />
                <Text className="text-black font-semibold ml-5 text-xl">
                  Order History
                </Text>
              </View>

              <Image
                source={require('../asset/images/forward.png')}
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => console.log('notification press')}>
            <View className="flex-row justify-between p-5">
              <View className="flex-row ">
                <Image
                  source={require('../asset/drawer/sp.png')}
                  className="h-9 w-9 rounded-xl"
                />
                <Text className="text-black font-semibold ml-5 text-xl">
                  Notifications
                </Text>
              </View>

              <Image
                source={require('../asset/images/forward.png')}
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer Section */}
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
          <TouchableOpacity onPress={handleLogout}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../asset/drawer/lo.png')}
              className="h-7 w-7 rounded-xl"
            />
            <Text className="text-black font-bold text-3xl">Logout</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: '#777', marginTop: 10}}>
            v1.0.0
          </Text>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '70%'},
        drawerType: 'front',
        drawerActiveBackgroundColor: 'slate-300',
        drawerActiveTintColor: '#673AB7',
        drawerInactiveTintColor: '#555',
        drawerLabelStyle: {fontSize: 16},
      }}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Drawer.Screen name="CartScreen" component={CartScreen} />
      <Drawer.Screen name="OrderHistory" component={OrderHistory} />
      <Drawer.Screen name="ProductDetail" component={ProductDetail} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;

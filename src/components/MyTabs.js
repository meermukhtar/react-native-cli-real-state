import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashBoardScreen from '../screens/DashBoardScreen';
import CartScreen from '../screens/CartScreen';
import Upload from '../screens/Upload';
import {View, Image, Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useMemo} from 'react';
import {styled} from 'nativewind';
import Categories from '../screens/Categories';
import Favourites from '../screens/Favourites';
import AddressCheck from '../screens/AddressCheck';
import OrderSuccess from '../screens/OrderSuccess';
import ProfileScreen from '../screens/ProfileScreen';
import CardsClone from '../screens/CardsClone';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const tabBarStyle = useMemo(
    () => ({
      position: 'absolute',
      bottom: 8,
      left: 16,
      right: 16,
      elevation: 5,
      borderRadius: 15,
      height: 65,
      backgroundColor: '#e2e8f0', // bg-slate-200
    }),
    [],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      {/* Home Tab */}
      <Tab.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center gap-1">
              <Image
                source={
                  focused
                    ? require('../asset/Tab(Icons)/home1.png')
                    : require('../asset/Tab(Icons)/home.png')
                }
                className="w-8 h-8"
              />
              <Text
                className={
                  focused
                    ? 'text-orange-800 font-extrabold  '
                    : 'text-gray-500 '
                }>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center gap-1">
              <Image
                source={
                  focused
                    ? require('../asset/Tab(Icons)/cst1.png')
                    : require('../asset/Tab(Icons)/cst.png')
                }
                className="w-8 h-8"
              />
              <Text
                className={
                  focused
                    ? 'text-orange-800 font-extrabold  '
                    : 'text-gray-500 '
                }>
                Categories
              </Text>
            </View>
          ),
        }}
      />

      {/* Upload Button - Floating in Center */}
      <Tab.Screen
        name="CardsClone"
        component={CardsClone}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center gap-1">
              {/* <Icon name={'twitter'} color="#1DA1F2" size={30} /> */}
              <Image
                source={
                  focused
                    ? require('../asset/Tab(Icons)/bb.png')
                    : require('../asset/Tab(Icons)/b.png')
                }
                className="w-8 h-8"
              />
              <Text
                className={
                  focused ? 'text-orange-800 font-extrabold' : 'text-gray-500'
                }>
                FlatList
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View className="flex items-center gap-1">
              <Image
                source={
                  focused
                    ? require('../asset/Tab(Icons)/profile1.png')
                    : require('../asset/Tab(Icons)/profile.png')
                }
                className="w-8 h-8"
              />
              <Text
                className={
                  focused ? 'text-orange-800 font-extrabold' : 'text-gray-500'
                }>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default styled(MyTabs);

import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../components/CartContext';
import AppBar from '../components/AppBar';
import CartScreenCard from '../components/CartScreenCard';
import RoutingButton from '../components/RoutingButton';
import Toast from 'react-native-toast-message';
const CartScreen = () => {
  const navigation = useNavigation();
  const {cartItems, removeFromCart} = useCart(); // Use cart state

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };
  const total = calculateTotalPrice() + 200 + 100;
  return (
    <SafeAreaView className="flex-1">
      <AppBar
        centerText={'text-center'}
        title={'Check out'}
        //  showBackButton={true}
        backButton={'backButton'}
        onBackPress={() => navigation.navigate('DashBoardScreen')}
        icon="cart"
        //showCartIcon={true}
      />
      <View className="flex-1 relative">
        <ScrollView contentContainerStyle={{paddingBottom: 180}}>
          <View className="content-center">
            {cartItems.map((item, index) => (
              <CartScreenCard
                key={index}
                title={item.title}
                prevPrice={item.price}
                newPrice={`$${item.price * item.quantity}`}
                image={item.image}
                initialQuantity={item.quantity}
                onPressDelete={() =>
                  Alert.alert(
                    'Delete Product',
                    'Are you sure you want to delete?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          removeFromCart(item.id);
                          Toast.show({
                            type: 'success',
                            text1: 'Deleted',
                            text2: 'Product deleted successfully👋',
                          });
                        },
                      },
                    ],
                  )
                }
              />
            ))}
          </View>
        </ScrollView>
        <View className="absolute bottom-10 left-0 right-0 bg-slate-200 h-35 mx-5  rounded-lg shadow-lg p-4">
          <View className="flex-row justify-between">
            <Text className="text-black font-semibold">
              Total Products ({cartItems.length})
            </Text>
            <Text className="text-black font-bold">${calculateTotalPrice()}</Text>
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-black font-semibold">GST</Text>
            <Text className="text-black font-bold">300</Text>
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-black font-semibold">Delivery</Text>
            <Text className="text-black font-bold">100</Text>
          </View>
          <View className="flex-row justify-between mt-2 mb-4">
            <Text className="text-black font-semibold">Total</Text>
            <Text className="text-black font-bold">{total}</Text>
          </View>
          <RoutingButton
            title="Check Out"
            onPress={() => navigation.navigate('AddressCheck',{cartItems})}
            color="orange-800"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

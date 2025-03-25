import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import RoutingButton from '../components/RoutingButton';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
const AddressCheck = () => {
  const [agree, setAgree] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const route = useRoute();
  const cartItems = route.params.cartItems || [];
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-full w-full bg-slate-50">
      <ScrollView>
        <AppBar title="Check Out" centerText="text-center" />

        <View className="flex-col p-3">
          {/* Home Delivery Section */}
          <Text className="text-black font-extrabold text-xl">
            Home Delivery
          </Text>

          <View className="h-40 bg-slate-100 mt-3 rounded-sm shadow shadow-black p-3">
            <View className="flex-col">
              <View className="flex-row justify-between">
                <Text className="text-black font-semibold text-xl">Home</Text>
                {/* <Text className="text-orange-800 font-semibold text-xl">
                  CheckBox
                </Text> */}

                <CheckBox value={agree} onChange={() => setAgree(!agree)} />
              </View>

              <Text className="text-black font-extrabold text-xl mt-2">
                Joy Forest
              </Text>

              <View className="flex-row justify-between mt-2">
                <Text className="text-black w-3/4">
                  531 Kassulke Brook, Suite 396, {'\n'}Brook, Suite 396
                </Text>
                <TouchableOpacity>
                  <Text className="text-orange-800 font-extrabold text-xl">
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Selected Product Section */}
          <Text className="text-black font-extrabold text-xl mt-5">
            Selected Product
          </Text>
          <ScrollView horizontal={true} className="mt-5">
            <View className="flex-row space-x-5">
              {cartItems.map((item, index) => (
                <View
                  key={index}
                  className="bg-slate-100 h-60 w-44 rounded-md shadow p-3">
                  <View className="items-center">
                    <Image
                      source={item.image}
                      className="w-[90%] h-36 rounded-md"
                    />
                  </View>
                  <Text className="text-black text-xl font-extrabold mt-2">
                    {item.title}
                  </Text>
                  <View className="flex-row justify-between mt-1">
                    <Text className="text-orange-800 font-extrabold text-xl">
                      ${item.price * item.quantity}
                    </Text>
                    <Text className="text-black text-xl">{item.quantity}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Payment Method */}
          <Text className="text-black font-extrabold text-xl mt-5">
            Payment Method
          </Text>

          <View className="bg-slate-100   mt-5 mb-5">
            <View className="flex-row justify-between ml-5 mt-5 mr-5  rounded-md">
              <Text className="text-black text-xl font-bold">Credit Card</Text>
              <CheckBox value={agree1} onChange={() => setAgree1(!agree1)} />
            </View>
            <View className="flex-row justify-between ml-5 mt-2 mr-5 rounded-md">
              <Text className="text-black text-xl font-bold">Easy Paysa</Text>
              <CheckBox value={agree2} onChange={() => setAgree2(!agree2)} />
            </View>
            <View className="flex-row justify-between ml-5 mt-2 mr-5 mb-5 rounded-md">
              <Text className="text-black text-xl font-bold">Cash</Text>
              <CheckBox value={agree3} onChange={() => setAgree3(!agree3)} />
            </View>
          </View>
          <RoutingButton
            title={'Confirm payment'}
            color={'orange-800'}
            onPress={() => {
              Alert.alert(
                'Payment Successful',
                'Your order has been placed successfully!',
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('OrderSuccess'),
                  },
                ],
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressCheck;


import { View, Text, Image, TouchableOpacity,Alert } from "react-native";
import React, { useState } from "react";

const CartScreenCard = ({ title, prevPrice, newPrice, image, initialQuantity = 1, onPressDelete }) => {
  const [counter, setCounter] = useState(initialQuantity);

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 0);
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 0);
    }
  };
  const createTwoButtonAlert = () =>
    Alert.alert('Delete Product', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  return (
    <View className="bg-slate-50 h-35 mx-5 mt-5 rounded-lg shadow shadow-black opacity-2 p-3">
      {/* Row Container for Image and Details */}
      <View className="flex-row items-center">
        {/* Product Image */}
        
        <Image source={image} className="w-16 h-16 rounded-lg" resizeMode="contain" />

        {/* Product Details (Name, Prices) */}
        <View className="flex-1 ml-4">
          {/* Product Name and Delete Icon */}
          <View className="flex-row justify-between items-center">
            <Text className="text-black font-semibold text-lg flex-1">{title}</Text>
            <TouchableOpacity onPress={onPressDelete}>
            {/* <Text className="text-black">Hello</Text> */}
            <Image source={require('../asset/images/del.png')} className="w-5 h-5" />
           
              
            </TouchableOpacity>
          </View>

          {/* Prices */}
          <Text className="text-black font-semibold text-md line-through">{prevPrice}</Text>
          <Text className="text-orange-800 font-semibold text-lg">{newPrice}</Text>
        </View>
      </View>

      {/* Quantity Controller */}
      <View className="flex-row justify-evenly items-center bg-slate-300 rounded-lg w-28 p-1 absolute right-4 bottom-2">
        <TouchableOpacity onPress={decreaseCounter}>
          <Text className="text-2xl font-semibold text-black">-</Text>
        </TouchableOpacity>
        <Text className="text-xl font-semibold">{counter}</Text>
        <TouchableOpacity onPress={increaseCounter}>
          <Text className="text-2xl font-semibold text-black">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreenCard;

import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';

// Reusable OrderCard Component
const OrderCard = ({ orderId, time, status, statusColor, bgColor }) => {
  return (
    <View className="bg-white w-full m-2 rounded-lg shadow shadow-black opacity-1/2">
      <View className="flex-col">
        <View className="m-3">
          <Text className={`text-xl font-bold ${statusColor}`}>{orderId}</Text>
        </View>
        <View className="flex-row justify-between ml-3 mr-3">
          <Text className="text-black font-bold">{time}</Text>
          <View className={`rounded-lg ${bgColor} p-1 relative`}>
            <Text className={`text-xl font-bold ${statusColor}`}>{status}</Text>
          </View>
        </View>
        <View className="ml-3 mr-3 mt-2 mb-2">
          <Text className="text-lg text-black font-semibold">2 items</Text>
          <Text className="text-black">
            The source of animation. Can be referenced as a local asset by a
            string.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default OrderCard
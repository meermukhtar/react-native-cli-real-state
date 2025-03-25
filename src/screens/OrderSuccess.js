import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import animation from '../asset/anim/success.json';
import RoutingButton from '../components/RoutingButton';
import { useNavigation } from '@react-navigation/native';

const OrderSuccess = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        
        {/* Lottie Animation */}
        <LottieView source={animation} autoPlay loop style={{ width: 200, height: 200 }} />
        {/* Order Success Text */}
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>Order Success</Text>
          <Text style={{ fontSize: 16, textAlign: 'center', color: '#666' }} className="text-black">
            Thanks for your order! Your package will be delivered to your address very quickly.
          </Text>
        </View>

        {/* Back to Home Button */}
        <RoutingButton title="Back To Home" color="orange-800" onPress={() => navigation.navigate('DashBoardScreen')} />

      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderSuccess;

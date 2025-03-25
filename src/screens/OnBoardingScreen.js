import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const userEmail = await AsyncStorage.getItem('userEmail');
  
        console.log('Stored isLoggedIn:', isLoggedIn);
        console.log('Stored userEmail:', userEmail);
  
        if (isLoggedIn === 'true' && userEmail) {
          console.log('✅ User logged in, navigating to Dashboard');
          navigation.replace('DashBoardScreen');
        } else {
          console.log('❌ User not logged in, navigating to SignInScreen');
          navigation.replace('SignInScreen');
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        navigation.replace('SignInScreen');
      }
    };
  
    checkLoginStatus();
  }, []);
  
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#ff6600" />
      </View>
    );
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="absolute bottom-2 right-12 p-3">
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text className="text-black font-bold text-lg">Skip</Text>
          </TouchableOpacity>
        </View>
        <Image 
          className="h-4/6 w-full"
          source={require('../asset/images/onboarding.png')}
        />
        <View className="content-center">
          <Text className="text-xl text-center mb-1 text-black-200">
            Welcome to Real Estate
          </Text>
          <Text className="text-2xl font-semibold text-center mb-1 text-black">
            Let's Get You Closer to
          </Text>
          <Text className="text-2xl font-semibold text-center text-orange-800 mb-3">
            Your Ideal Home
          </Text>
          <Text className="text-xl text-center text-black mt-3 mb-2">
            Login to Real Estate with Google
          </Text>
          <TouchableOpacity className="bg-orange-800 text-white py-3 mx-10 rounded-xl" onPress={() => console.log('hello')}>
            <View className="flex-row justify-center items-center">
              <Image
                source={require('../asset/images/google.png')}
                className="w-8 h-8 mr-2"
              />
              <Text className="text-center text-white font-extrabold text-xl">
                Google login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

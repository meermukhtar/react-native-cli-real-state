import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import RoutingButton from '../components/RoutingButton';
import { loginUser } from '../config/auth/LoginAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
const SignInScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const saveLoginState = async (email) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('userEmail', email); // Store user email for checking
    } catch (error) {
      console.error('Error saving login state:', error);
    }
  };
  
  const handleLogin = async () => {
    const response = await loginUser(email, password);
    if (response) {
     
      Alert.alert('Success', 'Login Success');
      navigation.navigate('DashBoardScreen')
      saveLoginState(email)
      // Navigate to home screen or save token
    } else {
      Alert.alert('Error', 'login Failed');
    }
  };
  return (
    <SafeAreaView className="bg-slate-100 h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="h-full">
        <View className="flex-col justify-center items-center px-10 w-full">
          {/* Image */}
          <View className="rounded-full h-36 w-36 mb-3 p-2 bg-slate-200 border-4 border-black-600 relative overflow-hidden">
            <Image
              source={require('../asset/images/p3.png')}
              className="h-full w-full rounded-full"
              resizeMode="cover"
            />
          </View>

          {/* Title */}
          <Text className="text-2xl font-extrabold text-center mb-8 text-black">
            Real Estate
          </Text>

          {/* Welcome Text */}
          <Text className="text-xl text-center mb-4 text-black font-semibold">
            Welcome Back!
          </Text>

          {/* Email Input */}
          <TextInput
            className="rounded-xl border p-1 text-black w-full px-4 py-3 mb-4"
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="black"
          />

          {/* Password Input */}
          <View className="flex-col justify-center items-center w-full mb-10">
            <TextInput
              className="rounded-xl border p-1 text-black w-full px-4 py-3"
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              secureTextEntry={true} // Ensure password is hidden
              placeholderTextColor="black"
            />

            {/* Forget Password positioned at the bottom right */}
            <Text className="absolute bottom-2 right-4 text-sm text-black font-semibold">
              Forget Password?
            </Text>
          </View>

          {/* Verify Button */}
          <RoutingButton
            title="Verify"
            color="orange-800"
            onPress={handleLogin}
          />
        </View>
      </ScrollView>

      {/* Sign Up Link */}
      <View className="flex-row justify-center mb-10">
        <Text className="text-xl text-center mb-1 text-black font-semibold">
          Don't have an account?
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text className="text-xl text-center mb-1 font-extrabold text-orange-800 ml-2">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

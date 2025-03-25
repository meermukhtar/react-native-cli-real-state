import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RoutingButton from '../components/RoutingButton';
import Otp from '../components/Otp';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const VerifyAccount = () => {
  const [time, setTime] = useState(60); // Start with 60 seconds (1 minute)
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    if (time === 0) return;

    const interval = setInterval(() => {
      if (time > 0) {
        setTime(prevTime => prevTime - 1); // Decrease the time by 1 second
      } else {
        clearInterval(interval); // Stop the timer when it reaches 0
      }
    }, 1000); // Update the timer every second

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [time]);

  // Function to handle resend code
  const handleResendCode = () => {
    setTime(60); // Reset the timer back to 60 seconds
    setIsTimerActive(true); // Reactivate the timer
    console.log('Resend Code triggered');
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-full w-full bg-slate-100">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="h-full">
        <View className="flex-col justify-center items-center px-10 w-full">
                 <View className="rounded-full  h-36 w-36 mb-3 border-4 p-2 bg-slate-200 border-black relative overflow-hidden">
                   <Image
                     source={require('../asset/images/p3.png')
                     }
                     className="h-full w-full rounded-full "
                     resizeMode="cover"
                   />
                 
                 </View>
          <Text className="text-4xl font-extrabold text-center mb-10 text-black">
            BAGGIE
          </Text>
          <Text className="text-2xl font-semibold text-center text-black mb-2">
            Verify Account
          </Text>
          <Text className="font-dark text-center mb-0 text-black">
            Enter 4 digit code we have sent
          </Text>
          <Text className="font-dark text-center mb-2 text-black">
            to your email
          </Text>

          {/* OTP Component */}
          <Otp />

          <Text className="font-dark text-center mb-2 text-black">
            Haven't received verification code?
          </Text>
          <View className="flex-row ">
            <Text
              className="font-light text-center mb-5 text-black"
              onPress={handleResendCode} // Resend Code action
            >
              Resend Code
            </Text>
            {isTimerActive && (
              <Text className="font-light text-center mb-5 text-black">
                : {time}s
              </Text>
            )}
          </View>

          <RoutingButton
            title={'Get Started'}
            color="orange-800"
            onPress={() => navigation.replace('DashBoardScreen')}
          />
        </View>
      </ScrollView>
      <View className="flex-row justify-center content-center mb-10">
        <Text className="text-xl text-center mb-1 text-black font-semibold">
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUpScreen')}>
          <Text className="text-xl text-center mb-1 font-extrabold text-orange-800 ml-2">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerifyAccount;

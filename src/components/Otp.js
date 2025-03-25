import React, {useState, useRef} from 'react';
import {TextInput, View, Text} from 'react-native';

const Otp = () => {
  // Initialize OTP state (one for each box)
  const [otp, setOtp] = useState(['', '', '', '']);

  // Create refs for each OTP input box
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text; // Update the specific OTP input

    setOtp(newOtp);

    // Focus on the next input field if the user entered a digit
    if (text && index < 3) {
      // We check index < 3 because we don't want to focus beyond the last input field
      inputRefs[index + 1].current.focus(); // Focus the next input
    }
  };

  return (
    <View className="flex-row justify-center items-center mb-10 mt-5">
      {otp.map((value, index) => (
        <View
          key={index}
          className="w-14 h-14 border-2  border-gray-400 rounded-lg justify-center items-center mx-4">
          <TextInput
            ref={inputRefs[index]} // Set ref for each input box
            value={value}
            onChangeText={text => handleOtpChange(text, index)}
            keyboardType="numeric" // Only numeric input
            maxLength={1} // Only one digit per box
            className="text-center text-xl"
          />
        </View>
      ))}
    </View>
  );
};

export default Otp;

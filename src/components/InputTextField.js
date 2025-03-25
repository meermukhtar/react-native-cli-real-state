import React from 'react';
import {TextInput, View, Text} from 'react-native';

const InputTextField = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
  errorMessage,
}) => {
  return (
    <View className="w-full mb-0">
      {/* TextInput */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
          placeholderTextColor="black"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        className={`rounded-xl border p-1 text-black w-full px-4 py-4 ${style} mb-3 bg-slate-200`} // Custom style via className
      />

      {/* Error message (optional) */}
      {errorMessage && (
        <Text className="text-red-500 text-sm mt-2">{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputTextField;

import {View, Text, Image} from 'react-native';
import React from 'react';

export default function SalesCard() {
  return (
    <View className="w-[90%] h-44 bg-slate-600 rounded-md  shadow">
      {' '}
      {/* Added shadow-md */}
      <Image
        source={require('../asset/images/onboarding.png')}
        resizeMethod="contain"
        className="h-full w-full shadow"
      />
    </View>
  );
}

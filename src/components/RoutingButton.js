import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

const RoutingButton = ({title, color, onPress}) => {
  return (
    <TouchableOpacity
      className={`bg-${color} py-4 px-8 w-full rounded-xl mb-4`} // Apply dynamic classes for color and padding
      onPress={onPress} // Button press handler
    >
      <Text className="text-white font-extrabold text-xl text-center">
        {title} {/* Button Title */}
      </Text>
    </TouchableOpacity>
  );
};

export default RoutingButton;

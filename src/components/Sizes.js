import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import productSizes from '../constants/ProductSizesList';

const Sizes = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle the selection of a category
  const handleSelectCategory = index => {
    setSelectedIndex(index); // Set the selected index when a category is pressed
  };
  return (
    <ScrollView horizontal>
      <View className="flex-row mt-5 mb-9">
        {productSizes.map((item, index) => {
          // Determine background color based on selected index
          const backgroundColor =
            selectedIndex === index ? 'bg-orange-800' : 'bg-slate-200';
          const textColor =
            selectedIndex === index ? 'text-white' : 'text-black';

          return (
            <TouchableOpacity
              className="ml-2 "
              key={index}
              onPress={() => handleSelectCategory(index)} // Set the selected category index
            >
              <View className={`rounded-3xl  ${backgroundColor} h-16 w-16`}>
                <Text className={`${textColor} text-xl text-center  mt-4`}>
                  {item.sizes}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Sizes;

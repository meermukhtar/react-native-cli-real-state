import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import categoriesList from '../constants/CategoriesList';

const FilterCategories = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle the selection of a category
  const handleSelectCategory = index => {
    setSelectedIndex(index); // Set the selected index when a category is pressed
  };
  return (
    <ScrollView horizontal>
      <View className="flex-row mt-5">
        {categoriesList.map((item, index) => {
          // Determine background color based on selected index
          const backgroundColor =
            selectedIndex === index ? 'bg-orange-800' : 'bg-slate-200';
          const textColor =
            selectedIndex === index ? 'text-white' : 'text-black';

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelectCategory(index)} // Set the selected category index
            >
              <View className={`rounded-lg ml-5 ${backgroundColor} px-5 py-3`}>
                <Text className={`${textColor} text-lg`}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default FilterCategories;

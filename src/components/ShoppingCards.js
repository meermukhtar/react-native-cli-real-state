import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const mapData = [
  {
    id: 1,
    title: 'Sultan',
    rating: '4.4',
    image: require('../asset/images/p1.png'),
    price: '3500',
    location: 'Pakistan',
    favImage: require('../asset/images/fav.png'),
    unFavImage: require('../asset/images/unfav.png'),
    des:"Quantum Fiber is a prepaid internet service subscription that allows you to select your preferred monthly payment method. It is built on a fiber-optic network, which uses light pulsing through special glass filaments to transmit information at high speeds."
  },
  {
    id: 2,
    title: 'Sara',
    rating: '4.8',
    image: require('../asset/images/p2.png'),
    price: '4500',
    location: 'Pakistan',
    favImage: require('../asset/images/fav.png'),
    unFavImage: require('../asset/images/unfav.png'),
    des:"Quantum Fiber is a prepaid internet service subscription that allows you to select your preferred monthly payment method. It is built on a fiber-optic network, which uses light pulsing through special glass filaments to transmit information at high speeds."
  
  },
  {
    id: 3,
    title: 'Hamza',
    rating: '4.8',
    image: require('../asset/images/p3.png'),
    price: '4500',
    location: 'Pakistan',
    favImage: require('../asset/images/fav.png'),
    unFavImage: require('../asset/images/unfav.png'),
    des:"Quantum Fiber is a prepaid internet service subscription that allows you to select your preferred monthly payment method. It is built on a fiber-optic network, which uses light pulsing through special glass filaments to transmit information at high speeds."
  
  },
  {
    id: 4,
    title: 'Ali',
    rating: '4.8',
    image: require('../asset/images/p4.png'),
    price: '4500',
    location: 'Pakistan',
    favImage: require('../asset/images/fav.png'),
    unFavImage: require('../asset/images/unfav.png'),
    des:"Quantum Fiber is a prepaid internet service subscription that allows you to select your preferred monthly payment method. It is built on a fiber-optic network, which uses light pulsing through special glass filaments to transmit information at high speeds."
  
  },
  {
    id: 5,
    title: 'Khalid',
    rating: '4.8',
    image: require('../asset/images/p5.png'),
    price: '4500',
    location: 'Pakistan',
    favImage: require('../asset/images/fav.png'),
    unFavImage: require('../asset/images/unfav.png'),
    des:"Quantum Fiber is a prepaid internet service subscription that allows you to select your preferred monthly payment method. It is built on a fiber-optic network, which uses light pulsing through special glass filaments to transmit information at high speeds."
  
  },
  {
    id: 6,
    title: 'Khan',
    rating: '4.8',
    image: require('../asset/images/p6.png'),
    price: '4500',
    location: 'Pakistan',
    favImage: require('../asset/images/fav.png'),
    unFavImage: require('../asset/images/unfav.png'),
    des:"Quantum Fiber is a prepaid internet service subscription that allows you to select your preferred monthly payment method. It is built on a fiber-optic network, which uses light pulsing through special glass filaments to transmit information at high speeds."
  
  },
];

const ShoppingCards = ({ onPress }) => {
  const [favorites, setFavorites] = useState({}); // Store favorite state per item
  const [rating, setRating] = useState(0) // Initial value
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id], // Toggle favorite state
    }));
  };

  const renderRow = (rowData) => (
    <View className="flex-row justify-between mb-4 gap-5 py-3 w-[110%]">
      {rowData.map((item) => (
        <TouchableOpacity
          key={item.id}
          className="flex-1 w-48 mt-4 px-3 py-4 rounded-lg bg-slate-100 shadow-lg shadow-slate-500 relative"
          onPress={() => onPress(item)}
        >
          {/* Favorite Toggle */}
          <TouchableOpacity
            onPress={() => toggleFavorite(item.id)}
            className="absolute top-5 right-5 flex-row items-center bg-white/90 px-2 py-1 rounded-full z-50"
          >
            <Image
              source={favorites[item.id] ? item.favImage : item.unFavImage}
              className="w-5 h-5"
            />
          </TouchableOpacity>

          {/* Product Image */}
          <Image source={item.image} className="w-full h-40 rounded-lg" />

          {/* Product Details */}
          <View className="flex-col mt-2">
            <Text className="text-black font-bold">{item.title}</Text>
            <Text className="text-xs text-black">{item.location}</Text>

            <View className="flex-row items-center justify-between mt-2">
              <Text className="text-black font-bold">{item.price}</Text>
              {/* <Icon name="heart" size={20} color="#191D31" style={{ marginRight: 8 }} /> */}
              {/* <Rating className="w-10" value={rating} onChange={setRating} /> */}
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Create rows of 2 cards each
  const rows = [];
  for (let i = 0; i < mapData.length; i += 2) {
    rows.push(mapData.slice(i, i + 2)); // Slice out two items per row
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {rows.map((rowData, index) => renderRow(rowData, index))}
    </ScrollView>
  );
};

export default ShoppingCards;

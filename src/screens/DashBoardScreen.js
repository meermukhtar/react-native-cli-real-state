import React, { useState } from 'react';
import { RefreshControl,View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/AppBar';
import FilterCategories from '../components/FilterCategories';
import ShoppingCards from '../components/ShoppingCards';
import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window'); // Get device width

const images = [
  require('../asset/images/p1.png'),
  require('../asset/images/p2.png'),
  require('../asset/images/p3.png')
];

const DashBoardScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* AppBar with Menu & Cart */}
      <AppBar
        title="Home"
        showMenuButton={true}
        icon="cart"
        showCartIcon={true}
        onMenuPress={() => navigation.openDrawer()}
        onCartPress={() => navigation.navigate('CartScreen')}
      />

      {/* Content Section */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}  refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
        <View className="mx-5 mt-5 mb-10">
          {/* Carousel Slider */}
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={width} // Use full screen width
            itemWidth={width * 0.80} // 80% of screen width
            onSnapToItem={(index) => setActiveIndex(index)}
            loop={true} // Enable looping
            autoplay={true} // Auto slide
            autoplayInterval={3000} // Every 3 seconds
          />

          {/* Sale Items and View All Section */}
          <View className="flex-row justify-between items-center mt-5">
            <Text className="text-lg font-bold text-black">Categories</Text>
            <TouchableOpacity>
              <Text className="text-black text-sm font-medium">View all</Text>
            </TouchableOpacity>
          </View>

          {/* Filter Categories */}
          <FilterCategories />

          {/* Shopping Cards */}
          <ShoppingCards
            onPress={(item) => {
              if (item) {
                console.log(item);
                navigation.navigate('ProductDetail', { product: item });
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles for the carousel images
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft:10,
    marginRight:10
  },
  image: {
    width: '100%',
    height: 200, // Adjust height as needed
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight:10
  }
});

export default DashBoardScreen;

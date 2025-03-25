import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';
import AppBar from '../components/AppBar';
import RoutingButton from '../components/RoutingButton';
import {useCart} from '../components/CartContext';
import Toast from 'react-native-toast-message';
const ProductDetail = () => {
  const [counter, setCounter] = useState(1);
  const route=useRoute();
  const navigation = useNavigation();
  const {addToCart} = useCart(); // Use the addToCart function from context
  // Get the selected product from route params
  const product = route.params?.product;
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: counter,
      text2: 'Product added to cart successfully👋'
    });
  }
  if(!product){
    <SafeAreaView>
      <View className="justify-center content-center">
        <Text className="text-black font-extrabold">No Data is available</Text>
      </View>
    </SafeAreaView>
  }
  const handleAddToCart = () => {
    const updatedProduct = {
      ...product,
      quantity: counter, // Include the selected quantity
      total: product.price * counter, // Multiply price by quantity
    };
    addToCart(updatedProduct); // Add updated product to cart
    showToast();
    setCounter(1); // Reset the counter after adding to cart
  };
  

  return (
    <SafeAreaView className="h-full w-full">
      <AppBar
        centerText={'text-center'}
        title={'Product'}
        showBackButton={true}
        backButton={'backButton'}
        onBackPress={() => navigation.navigate('DashBoardScreen')}
        onCartPress={() => navigation.navigate('CartScreen')}
        icon={'cart'}
        showCartIcon={true}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}} className="m-3">
        <View>
          <View className="mt-0 ml-3 mr-3 relative flex-col  h-full">
            <Image
              source={product.image}
              resizeMethod="contain"
              className="w-full object-cover rounded-lg h-[55%]"
            />
            <View className="mt-5 mb-5 flex-row justify-between">
              <Text className="text-2xl text-black font-extrabold">
                {product.title}
              </Text>
            </View>
            <View className="flex-row justify-between ">
              <Text className="text-orange-800 text-3xl font-bold">
                ${product.price}
              </Text>
              <View className="flex-row bg-white justify-between rounded-lg w-[30%]">
                <TouchableOpacity onPress={() => setCounter(counter + 1)}>
                  <Text className="text-3xl text-black font-semibold ml-2">
                    +
                  </Text>
                </TouchableOpacity>
                <Text className="text-3xl text-black font-semibold">
                  {counter}
                </Text>
                <TouchableOpacity
                  onPress={() => counter > 1 && setCounter(counter - 1)}>
                  <Text className="text-4xl font-semibold mr-2 text-black">
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-1 pb-10">
              <Text className="text-black text-xl font-bold">Description</Text>
              <Text className="text-black">
                {product.des}
              </Text>
            </View>
            <RoutingButton
              title={'Add To Cart'}
              color={'orange-800'}
              onPress={handleAddToCart}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

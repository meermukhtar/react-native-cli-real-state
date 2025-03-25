import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppBar from '../components/AppBar';
import {useNavigation} from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-full w-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <AppBar title={'Categories'} centerText={'text-center'} 
         // showBackButton={true}
        //  backButton={'backButton'}
        //  onBackPress={() => navigation.navigate('DashBoardScreen')}
          onCartPress={()=>navigation.navigate('CartScreen')}
          />
          <View className="flex-col m-5 items-center">
            {/* 1st row */}
            <View className="flex-row flex-wrap bg-slate-200 rounded-md justify-center">
              <TouchableOpacity onPress={() => console.log('flats pressed')}>
                <View className="bg-slate-200 m-2">
                  <Image
                    source={require('../asset/Categories(apartments)/1-bed.jpg')}
                    className="h-40 w-40 rounded-lg"
                    blurRadius={5}
                  />
                  <View className="h-40 w-40 absolute justify-center bg-transparent">
                    <Text className="text-white text-center font-extrabold text-3xl">
                      1-Bed
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log('residence pressed')}>
                <View className="bg-slate-200 m-2">
                  <Image
                    source={require('../asset/Categories(apartments)/2-beds.png')}
                    className="h-40 w-40 rounded-lg"
                    blurRadius={5}
                  />
                  <View className="h-40 w-40 absolute justify-center bg-transparent">
                    <Text className="text-white text-center font-extrabold text-3xl">
                      2-Bed
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* 2nd row */}
            <View className="flex-row flex-wrap bg-slate-200 rounded-md justify-center">
              <TouchableOpacity onPress={() => console.log('1-Bed pressed')}>
                <View className="bg-slate-200 m-2">
                  <Image
                    source={require('../asset/Categories(apartments)/apart.jpg')}
                    className="h-40 w-40 rounded-lg"
                    blurRadius={5}
                  />
                  <View className="h-40 w-40 absolute justify-center bg-transparent">
                    <Text className="text-white text-center font-extrabold text-3xl">
                      Apartment
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log('2-Bed pressed')}>
                <View className="bg-slate-200 m-2">
                  <Image
                    source={require('../asset/Categories(apartments)/furnish.jpg')}
                    className="h-40 w-40 rounded-lg"
                    blurRadius={5}
                  />
                  <View className="h-40 w-40 absolute justify-center bg-transparent">
                    <Text className="text-white text-center font-extrabold text-3xl">
                      Furnished
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* 3rd row */}
            <View className="flex-row flex-wrap bg-slate-200 rounded-md justify-center">
              <TouchableOpacity onPress={() => console.log('Furnished pressed')}>
                <View className="bg-slate-200 m-2">
                  <Image
                    source={require('../asset/Categories(apartments)/office.jpg')}
                    className="h-40 w-40 rounded-lg"
                    blurRadius={5}
                  />
                  <View className="h-40 w-40 absolute justify-center bg-transparent">
                    <Text className="text-white text-center font-extrabold text-3xl">
                      Office
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => console.log('Villas pressed')}>
                <View className="bg-slate-200 m-2">
                  <Image
                    source={require('../asset/Categories(apartments)/villas.jpeg')}
                    className="h-40 w-40 rounded-lg"
                    blurRadius={5}
                  />
                  <View className="h-40 w-40 absolute justify-center bg-transparent">
                    <Text className="text-white text-center font-extrabold text-3xl">
                      Villas
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Categories;

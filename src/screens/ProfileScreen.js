import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'; 
import React from 'react'; 
import AppBar from '../components/AppBar'; 

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <AppBar 
        title={"Profile"} 
        centerText={'text-start'} 
        backButton={'backButton'}  
        onBackPress={() => navigation.navigate('DashBoardScreen')}  
        showBackButton={true} 
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1,  alignItems: 'center', padding: 20 }}>
        {/* Profile Picture and Name */}
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Image style={{ width: 150, height: 150, borderRadius: 75 }} source={require('../asset/images/p5.png')} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Xyz</Text>
        </View>

        {/* Profile Options */}
        {[
          { label: "Favorite", icon: require('../asset/Tab(Icons)/fav.png') },
          { label: "My Orders", icon: require('../asset/images/bcart.png') },
          { label: "My Account", icon: require('../asset/Tab(Icons)/profile.png') },
          { label: "My Payment Settings", icon: require('../asset/images/pay.png') },
          { label: "FAQ", icon: require('../asset/images/faq.png') }
        ].map((item, index) => (
          <TouchableOpacity key={index} style={{ backgroundColor: '#E2E8F0', padding: 15, borderRadius: 10, width: '100%', marginTop: index === 0 ? 0 : 8 }} onPress={() => alert(`${item.label} clicked`)}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image source={item.icon} style={{ width: 28, height: 28 }} />
                <Text style={{ fontSize: 16 }} className="text-black">{item.label}</Text>
              </View>
              <Text style={{ fontSize: 18, color: '#555' }}>➡️</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

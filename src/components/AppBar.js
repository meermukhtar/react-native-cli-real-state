import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppBar({
  title,
  icon,
  showBackButton = false,
  showMenuButton = false,
  showCartIcon = false,
  onBackPress,
  onMenuPress,
  onCartPress,
  centerText,
  backButton
}) {
  // Function to dynamically load images
  const getImageSource = (imageName) => {
    const images = {
      cart: require('../asset/images/crt.png'),
      profile: require('../asset/images/real.png'),
      home: require('../asset/images/p3.png'),
      // Add more images here as needed
    };

    return images[imageName] || require('../asset/images/p6.png'); // Default image if not found
  };
  const getImageBack = (imageName) => {
    const images = {
      backButton: require('../asset/images/b_arrow.png'),
      // Add more images here as needed
    };

    return images[imageName] || require('../asset/images/p6.png'); // Default image if not found
  };

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#e2e8f0" />
      <View style={{ backgroundColor: '#e2e8f0' }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 16,
            alignItems: 'center',
          }}
        >
          {/* Left-aligned buttons (Back and Menu) */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Back Button (optional) */}
            {showBackButton && (
              <TouchableOpacity onPress={onBackPress} style={{ marginTop: 10 }}>
                <Image source={getImageBack(backButton)} style={{ width: 30, height: 20 }} />
              </TouchableOpacity>
            )}

            {/* Menu Button (optional) */}
            {showMenuButton && (
              <TouchableOpacity onPress={onMenuPress} style={{ marginTop: 10, marginLeft: 16 }}>
                <Image source={require('../asset/images/drawer1.png')} className="h-7 w-7" />
              </TouchableOpacity>
            )}
          </View>

          {/* Title */}
          <Text
            className={`${centerText} text-black`}
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: showBackButton || showMenuButton ? 20 : 0,
              flex: 1, // This takes up all the space between left and right icons
            }}
          >
            {title}
          </Text>

          {/* Right-aligned Cart Icon (optional) */}
          {showCartIcon && (
            <TouchableOpacity onPress={onCartPress} style={{ marginTop: 10 }}>
              <Image source={getImageSource(icon)} style={{ width: 30, height: 20 }} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import InputTextField from '../components/InputTextField';
import RoutingButton from '../components/RoutingButton';
import CheckBox from '@react-native-community/checkbox';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DateRangePicker from '../components/DateRangePicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform, Alert} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import CustomDropDown from '../components/CustomDropDown';
const {width} = Dimensions.get('window'); // Get screen width
import {registerUser} from '../config/auth/RegisterAuth';
import axios from 'axios';
const SignUpScreen = () => {
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(0);
  const [agree, setAgree] = useState(false);
  const [username, setusername] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [range, setRange] = useState([20, 80]);
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date1, setDate1] = useState('09-10-2020');
  const [fileData, setFileData] = useState(null);
  const [fileUri, setFileUri] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  function toggle() {
    setVisible(visible => !visible);
  }

  const handleRegister = async () => {
    if (!username || !email || !password || !password2) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (password !== password2) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await registerUser(username, email, password, password2);
      // Clear fields
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('SignInScreen');
      console.log('Registration Response:', response);
    } catch (error) {
      Alert.alert(
        'Registration Failed',
        error.response?.data?.message || 'An error occurred',
      );
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);

        return (
          granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
            PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS automatically handles permissions
  };

  const launchNativeImageLibrary = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      const hasPermission = requestCameraPermission();
      if (!hasPermission) {
        Alert.alert(
          'Permission Denied',
          'Camera permission is required to take photos.',
        );
        return;
      }

      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.assets.uri};
        console.log('response', JSON.stringify(response));
        setFileData(response.assets[0].base64);
        setFileUri(response.assets[0].uri);
      }
    });
  };
  const launchNativeCamera = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setFileData(response.assets[0].base64);
        setFileUri(response.assets[0].uri);
      }
    });
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = selectedDate => {
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    setDate(formattedDate);
    hideDatePicker();
  };
  return (
    <SafeAreaView className=" h-full">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="h-full">
        <View className="flex-col justify-center items-center px-8 w-full pt-10">
          {/* Logo */}

          <View className="rounded-full  h-36 w-36 mb-3 border-2 border-green-600 relative overflow-hidden">
            <Image
              source={
                fileUri ? {uri: fileUri} : require('../asset/images/p3.png')
              }
              className="h-full w-full rounded-full "
              resizeMode="cover"
            />
            <TouchableOpacity onPress={toggle}>
              <View className="absolute bottom-0 left-0 right-0 bg-slate-300 py-1 flex items-center rounded-b-full">
                <Text className="text-black font-semibold">Edit</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* App Title */}
          <Text className="text-4xl font-extrabold text-center text-black">
            BAGGIE
          </Text>
          <Text className="text-2xl text-center mb-4 text-gray-600 font-semibold">
            Welcome!
          </Text>

          {/* Input Fields */}
          <InputTextField
            value={username}
            onChangeText={setusername}
            placeholder="First Name"
          />
          <InputTextField
            value={lname}
            onChangeText={setLname}
            placeholder="Last Name"
            margin={5}
          />

          <InputTextField
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Email"
            margin={5}
          />
          <InputTextField
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <InputTextField
            value={password2}
            onChangeText={setPassword2}
            placeholder="Password"
            secureTextEntry={true}
          />

          <View className="flex-row gap-1 w-full">
            {/* Gender Dropdown */}
            <View className="flex-1">
              <CustomDropDown
                items={[
                  {label: 'Male', value: 'Male'},
                  {label: 'Female', value: 'Female'},
                  {label: 'Other', value: 'Other'},
                ]}
                placeholder="Select Gender"
                onValueChange={setSelectedValue}
              />
            </View>

            {/* Date Picker */}
            <View className="flex-1">
              <TouchableOpacity onPress={showDatePicker}>
                <View className="bg-slate-200 border-2 border-black rounded-lg px-2 flex-row justify-between items-center">
                  <TextInput
                    value={date}
                    placeholder="Select Date"
                    editable={false}
                    className="flex-1 text-black font-semibold"
                  />
                  <Icon name="calendar-month" size={30} color="#000" />
                </View>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>

          {/* Sign Up Button */}
          {/* Terms & Conditions */}
          <View className="flex-row items-center justify-between mt-2 mb-2 w-full">
            <CheckBox value={agree} onChange={() => setAgree(!agree)} />

            <View className="flex-row justify-between">
              <Text className="text-black">I agree to the </Text>
              <TouchableOpacity>
                <Text className="font-semibold text-orange-800">
                  Terms and Conditions
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <RoutingButton
            title="Sign Up"
            color="orange-800"
            onPress={handleRegister}
          />
        </View>
      </ScrollView>

      {/* Already Have an Account? */}
      <View className="flex-row items-center justify-center mb-10">
        <Text className="text-xl text-black">Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignInScreen')}>
          <Text className="font-semibold text-xl text-orange-800">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

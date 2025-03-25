import axios from 'axios';
const getToken = async () => {
    try {
      return await AsyncStorage.getItem('userToken');
    } catch (e) {
      console.error('Error fetching token:', e);
      return null;
    }
  };
  

  const logoutUser = async () => {
    const apiUrl = 'http://192.168.137.1:8000/api/logout/';
    const token = await getToken(); // Retrieve stored token
  
    if (!token) {
      console.log('No token found, user is already logged out.');
      return false;
    }
  
    try {
      const response = await axios.post(apiUrl, {}, {
        headers: {
          Authorization: `Token ${token}`, // Send token in header
        },
      });
  
      if (response.status === 200) {
        console.log('Logout successful');
        await AsyncStorage.removeItem('userToken'); // Remove token after logout
        return true;
      }
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
    }
    return false;
  };
  export default logoutUser
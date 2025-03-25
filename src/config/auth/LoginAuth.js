import axios from 'axios';

export const loginUser    = async (email, password) => {
  try {
    const response = await axios.post('http://192.168.137.1:8000/api/login/', {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      console.log('Login Successful:', response.data);
      return response.data; // Handle the token if returned
    } else {
      console.log('Login Failed:', response.data);
    }
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
  }
};

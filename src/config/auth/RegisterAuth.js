import axios from "axios";
// "http://127.0.0.1:8000/api/register/"
// const API_URL = "http://127.0.0.1:8000/api/"; // Change to your backend URL
const API_URL = "http://127.0.0.1:8000/api/register/"; // Change to your backend URL
// const API_URL = "http://10.0.2.2:8000/api/register/";
// cors_allowed_origin=['port react']http://192.168.137.1:8000/api/register/
export const registerUser = async (username, email, password, password2) => {
  try {
    const response = await axios.post('http://192.168.137.1:8000/api/register/', {
      username,
      email,
      password,
      password2,
    });
  
    if (response.status === 200) {
      console.log('Login Successful:', response.data);
      return response.data; // Handle the token if returned
    } else {
      console.log('Login Failed:', response.data);
    }
    // console.log(response);
    // return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};

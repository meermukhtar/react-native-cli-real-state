import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: '1066168762245-lqkp9vh3rvma63tjb6a9ljf3mbfev9gm.apps.googleusercontent.com',
  });
};

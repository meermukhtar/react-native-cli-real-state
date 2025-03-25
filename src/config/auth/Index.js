import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const _signInWithGoogle = async () => {
  try {
    console.log('Configuring Google Sign-In...');
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId: '1066168762245-lqkp9vh3rvma63tjb6a9ljf3mbfev9gm.apps.googleusercontent.com',
      // scopes: ['profile', 'email'],
    });

    console.log('Checking Play Services...');
    await GoogleSignin.hasPlayServices();
    console.log('Google Play Services are available.');

    console.log('Attempting to sign in with Google...');
    const userInfo = await GoogleSignin.signIn();
    console.log('User Info:', userInfo);

    const { idToken } = userInfo;
    console.log('ID Token:', idToken);
    
    console.log('Creating Google Credentials...');
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    console.log('Signing in with Firebase...');
    
    const userCredential = await auth().signInWithCredential(googleCredentials);
    console.log('User signed in with Firebase: ', userCredential);

    return userInfo;
    
  } catch (error) {
    console.error('Error during Google Sign-In:', error);
    return null;
  }
};

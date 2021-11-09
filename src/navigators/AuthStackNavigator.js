import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SignInScreen, SignUpScreen } from '../screens';

const Stack = createStackNavigator();

let  AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator
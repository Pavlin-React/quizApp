import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './navigators/AuthStackNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator/>
    </NavigationContainer>
  )
}

export default App

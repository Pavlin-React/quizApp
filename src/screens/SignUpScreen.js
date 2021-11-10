import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import {COLORS} from '../constans/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';

const SignUpScreen = ({navigation}) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('')

  let handleOnSubmit = () => {
    if (email !== '' && password !== '' && confirmPassword !== '') {
      if (password == confirmPassword) {
        // Sign Up
      } else {
        Alert.alert('password did not match')
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: COLORS.black,
          marginVertical: 32,
        }}>
        Sign Up
      </Text>
      <FormInput
        labelText="Email"
        placeholder="Enter your email"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType={'email-address'}
      />
      <FormInput
        labelText="Password"
        placeholder="Enter your password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <FormInput
        labelText="Confirm Password"
        placeholder="Confirm your password"
        onChangeText={value => setConfirmPassword(value)}
        value={confirmPassword}
        secureTextEntry={true}
      />
      <FormButton
        labelText="Submit"
        onHandlePress={handleOnSubmit}
        style={{width: '100%'}}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Text>Already have an account ?</Text>
        <Text
          onPress={() => navigation.navigate('SignInScreen')}
          style={{marginLeft: 4, color: COLORS.primary}}>
          Sign In
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

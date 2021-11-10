import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../constans/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';

const SignInScreen = ({navigation}) => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  let handleOnSubmit = () => {
    if (email !== '' && password !== '') {
      // Sign In
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
        Sign In
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
      <FormButton
        labelText="Submit"
        onHandlePress={handleOnSubmit}
        style={{width: '100%'}}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Text>Don't have an account ?</Text>
        <Text
          style={{marginLeft: 4, color: COLORS.primary}}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Create account
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

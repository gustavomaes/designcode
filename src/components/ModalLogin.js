/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Success from './Success';
import Loading from './Loading';

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
  margin-top: 50px;
`;

const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;

const Button = styled.View`
  background: #5263ff;
  width: 295px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

const IconEmail = styled.Image`
  width: 20px;
  height: 16px;
  position: absolute;
  top: 179px;
  left: 31px;
`;

const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 239px;
  left: 35px;
`;

const ModalLogin = () => {
  const [isSuccessful, setIsSuccessfull] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [iconEmail, setIconEmail] = useState(
    require('../../assets/icon-email.png')
  );
  const [iconPassword, setIconPassword] = useState(
    require('../../assets/icon-password.png')
  );

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessfull(true);
    }, 2000);
  };

  const focusEmail = () => {
    setIconEmail(require('../../assets/icon-email-animated.gif'));
  };

  const focusPassword = () => {
    setIconPassword(require('../../assets/icon-password-animated.gif'));
  };

  const tapBackground = () => {
    Keyboard.dismiss();
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => tapBackground()}>
        <BlurView
          blurType="light"
          blurAmount={100}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </TouchableWithoutFeedback>
      <Modal>
        <Logo source={require('../../assets/logo-dc.png')} />
        <Text>Start learning. Access Pro Content.</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          onFocus={() => focusEmail()}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          onFocus={() => focusPassword()}
        />
        <IconEmail source={iconEmail} />
        <IconPassword source={iconPassword} />
        <TouchableOpacity onPress={() => handleLogin()}>
          <Button>
            <ButtonText>log In</ButtonText>
          </Button>
        </TouchableOpacity>
      </Modal>
      <Success isActive={isSuccessful} />
      <Loading isActive={isLoading} />
    </Container>
  );
};

export default ModalLogin;

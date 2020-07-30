/* eslint-disable comma-dangle */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
  Dimensions,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import Success from './Success';
import Loading from './Loading';
import StoreContext from '../contexts/StoreContext';

const screenHeight = Dimensions.get('window').height;

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

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Modal = styled.View`
  width: 335px;
  height: 370px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;

const AnimatedModal = Animated.createAnimatedComponent(Modal);

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
  const { loginOpen, setLoginOpen } = useContext(StoreContext);
  const [isSuccessful, setIsSuccessfull] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [top] = useState(new Animated.Value(screenHeight));
  const [scale] = useState(new Animated.Value(1.3));
  const [translateY] = useState(new Animated.Value(0));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [iconEmail, setIconEmail] = useState(
    require('../../assets/icon-email.png')
  );
  const [iconPassword, setIconPassword] = useState(
    require('../../assets/icon-password.png')
  );

  useEffect(() => {
    if (loginOpen) {
      Animated.timing(top, { toValue: 0, duration: 0 }).start();
      Animated.spring(scale, { toValue: 1 }).start();
      Animated.timing(translateY, { toValue: 0, duration: 0 }).start();
    }
    if (!loginOpen) {
      setTimeout(() => {
        Animated.timing(top, { toValue: screenHeight, duration: 0 }).start();
        Animated.spring(scale, { toValue: 1.3 }).start();
      }, 500);
      Animated.timing(translateY, { toValue: 1000, duration: 500 }).start();
    }
  }, [loginOpen]);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessfull(true);
      Alert.alert('Congrats', "You've logged successfuly!");

      setTimeout(() => {
        setLoginOpen(false);
        setIsSuccessfull(false);
      }, 1000);
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
    setLoginOpen(false);
  };

  return (
    <AnimatedContainer style={{ top }}>
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
      <AnimatedModal style={{ transform: [{ scale }, { translateY }] }}>
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
      </AnimatedModal>
      <Success isActive={isSuccessful} />
      <Loading isActive={isLoading} />
    </AnimatedContainer>
  );
};

export default ModalLogin;

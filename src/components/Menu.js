import React, { useState, useEffect, useContext } from 'react';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuItem from './MenuItem';
import StoreContext from '../contexts/StoreContext';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
let cardWidth = screenWidth;
if (screenWidth > 500) {
  cardWidth = 500;
}

const Container = styled.View`
  align-self: center;
  position: absolute;
  background: white;
  width: ${cardWidth};
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContaine = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  height: ${screenHeight};
  background-color: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: 'ios-settings',
    title: 'Account',
    text: 'settings',
  },
  {
    icon: 'ios-card',
    title: 'Billing',
    text: 'payments',
  },
  {
    icon: 'ios-compass',
    title: 'Learn React',
    text: 'start course',
  },
  {
    icon: 'ios-exit',
    title: 'Log out',
    text: 'see you soon!',
  },
];
const Menu = () => {
  const [top] = useState(new Animated.Value(screenHeight));
  const { action, setAction } = useContext(StoreContext);

  const toggleMenu = () => {
    if (action === 'openMenu') {
      Animated.spring(top, {
        toValue: 54,
      }).start();
    }
    if (action === 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight,
      }).start();
    }
  };

  useEffect(() => {
    toggleMenu();
  }, []);

  useEffect(() => {
    toggleMenu();
  }, [action]);

  return (
    <AnimatedContaine style={{ top }}>
      <Cover>
        <Image source={require('../../assets/background2.jpg')} />
        <Title>Gustavo</Title>
        <Subtitle>Designer at Design+Code </Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={() => setAction('closeMenu')}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map((item) => (
          <MenuItem icon={item.icon} title={item.title} text={item.text} />
        ))}
      </Content>
    </AnimatedContaine>
  );
};

export default Menu;

import React, { useState, useContext } from 'react';
import {
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import StoreContext from '../contexts/StoreContext';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const tabBarHeight = 79;

const Container = styled.View`
  width: 350px;
  height: 460px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContaine = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 290px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
  position: absolute;
  bottom: 20;
  left: 20;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);

const AnimatedLinear = Animated.createAnimatedComponent(LinearGradient);

const Project = ({ image, title, author, text, canOpen = false }) => {
  const [cardWidth] = useState(new Animated.Value(315));
  const [cardHeight] = useState(new Animated.Value(460));
  const [titleTop] = useState(new Animated.Value(20));
  const [opacity] = useState(new Animated.Value(0));
  const [textHeight] = useState(new Animated.Value(100));

  const { setCardOpen } = useContext(StoreContext);

  const openCard = () => {
    setCardOpen(true);
    if (!canOpen) return;
    Animated.spring(cardWidth, {
      toValue: screenWidth,
      useNativeDriver: false,
    }).start();
    Animated.spring(cardHeight, {
      toValue: screenHeight - tabBarHeight,
      useNativeDriver: false,
    }).start();
    Animated.spring(titleTop, {
      toValue: 40,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacity, { toValue: 1, useNativeDriver: true }).start();
    Animated.spring(textHeight, {
      toValue: 1000,
      useNativeDriver: false,
    }).start();
    StatusBar.setHidden(true);
  };

  const closeCard = () => {
    setCardOpen(false);
    Animated.spring(cardWidth, {
      toValue: 315,
      useNativeDriver: false,
    }).start();
    Animated.spring(cardHeight, {
      toValue: 460,
      useNativeDriver: false,
    }).start();
    Animated.spring(titleTop, {
      toValue: 20,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacity, { toValue: 0, useNativeDriver: true }).start();
    Animated.spring(textHeight, {
      toValue: 100,
      useNativeDriver: false,
    }).start();
    StatusBar.setHidden(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => openCard()}>
      <AnimatedContaine
        style={{
          width: cardWidth,
          height: cardHeight,
        }}
      >
        <Cover>
          <Image source={image} />
          <AnimatedTitle style={{ top: titleTop }}>{title}</AnimatedTitle>
          <Author>by {author}</Author>
        </Cover>
        <AnimatedText style={{ height: textHeight }}>{text}</AnimatedText>
        <AnimatedLinear
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
          style={{
            position: 'absolute',
            top: 330,
            width: '100%',
            height: textHeight,
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
          onPress={() => closeCard()}
        >
          <AnimatedCloseView style={{ opacity }}>
            <Ionicons name="ios-close" size={32} color="#546bfb" />
          </AnimatedCloseView>
        </TouchableOpacity>
      </AnimatedContaine>
    </TouchableWithoutFeedback>
  );
};

export default Project;

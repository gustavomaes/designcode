import React, { useRef, useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';

const screenHeight = Dimensions.get('window').height;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Loading = ({ isActive }) => {
  const [top] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));
  const animation = useRef(null);

  useEffect(() => {
    if (isActive) {
      Animated.timing(top, {
        toValue: 0,
        duration: 0,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
      }).start();
      animation.current.play();
    } else {
      Animated.timing(top, {
        toValue: screenHeight,
        duration: 0,
      }).start();
      Animated.timing(opacity, {
        toValue: 0,
      }).start();
      animation.current.loop = false;
    }
  }, [isActive]);

  return (
    <AnimatedContainer style={{ top, opacity }}>
      <LottieView
        source={require('../../assets/lottie-loading-fluid.json')}
        autoPlay={false}
        loop
        ref={animation}
      />
    </AnimatedContainer>
  );
};

export default Loading;

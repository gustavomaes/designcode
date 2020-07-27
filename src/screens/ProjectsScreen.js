/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import styled from 'styled-components';
import { PanResponder, Animated } from 'react-native';
import Project from '../components/Project';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`;

const projects = [
  {
    title: 'Price Tag',
    image: require('../../assets/background5.jpg'),
    author: 'Liu Yi',
    text:
      'Thanks to Design+Code, I improved my design skill and learned to do animations for my app Price Tag, a top news app in China.',
  },
  {
    title: 'The DM App - Ananoumous Chat',
    image: require('../../assets/background6.jpg'),
    author: 'Chad Goodman',
    text:
      'Design+Code was the first resource I used when breaking into software. I went from knowing nothing about design or code to building a production ready app from scratch. ',
  },
  {
    title: 'Nikhiljay',
    image: require('../../assets/background7.jpg'),
    author: "Nikhil D'Souza",
    text:
      "Recently finished the React course by @Mengto, and I 10/10 would recommend. I already rewrote my personal website in @reactjs and I'm very excited with it.",
  },
];
const ProjectsScreen = () => {
  const [pan] = useState(new Animated.ValueXY());
  const [scale] = useState(new Animated.Value(0.9));
  const [translateY] = useState(new Animated.Value(44));

  const panResponder = PanResponder.create({
    onPanResponderGrant: () => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
    onPanResponderRelease: () => {
      const positionY = pan.y.__getValue();

      if (positionY > 200) {
        Animated.timing(pan, {
          toValue: { x: pan.x, y: 1000 },
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
        Animated.spring(scale, {
          toValue: 0.9,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 44,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Container>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <Project
          title="Price tag"
          image={require('../../assets/background5.jpg')}
          author="Gustavo Maes"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ scale }, { translateY }],
        }}
      >
        <Project
          title="Price tag"
          image={require('../../assets/background6.jpg')}
          author="Gustavo Maes"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </Animated.View>
    </Container>
  );
};

export default ProjectsScreen;

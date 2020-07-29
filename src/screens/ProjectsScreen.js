/* eslint-disable no-underscore-dangle */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { PanResponder, Animated } from 'react-native';
import Project from '../components/Project';
import StoreContext from '../contexts/StoreContext';

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
  const [thirdScale] = useState(new Animated.Value(0.8));
  const [thirdTranslateY] = useState(new Animated.Value(-50));
  const [index, setIndex] = useState(0);
  const { cardOpen } = useContext(StoreContext);

  const getNextIndex = (value) => {
    const nextIndex = value + 1;
    if (nextIndex > projects.length - 1) {
      return 0;
    }
    return nextIndex;
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (event, gestureState) => {
      if (gestureState.dx === 0 && gestureState.dy === 0) return false;
      if (cardOpen) return false;
      return true;
    },

    onPanResponderGrant: () => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();

      // Third card
      Animated.spring(thirdScale, {
        toValue: 0.9,
        useNativeDriver: true,
      }).start();
      Animated.spring(thirdTranslateY, {
        toValue: 44,
        useNativeDriver: true,
      }).start();
    },

    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),

    onPanResponderRelease: () => {
      const positionY = pan.y.__getValue();

      if (positionY > 200) {
        Animated.timing(pan, {
          toValue: { x: 0, y: 1000 },
          useNativeDriver: true,
        }).start(() => {
          pan.setValue({ x: 0, y: 0 });
          scale.setValue(0.9);
          translateY.setValue(44);
          thirdScale.setValue(0.8);
          thirdTranslateY.setValue(-50);
          setIndex(getNextIndex(index));
        });
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
        // Third Card
        Animated.spring(thirdScale, {
          toValue: 0.8,
          useNativeDriver: true,
        }).start();
        Animated.spring(thirdTranslateY, {
          toValue: -50,
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
          canOpen
          title={projects[index].title}
          image={projects[index].image}
          author={projects[index].author}
          text={projects[index].text}
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
          title={projects[getNextIndex(index)].title}
          image={projects[getNextIndex(index)].image}
          author={projects[getNextIndex(index)].author}
          text={projects[getNextIndex(index)].text}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -2,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ scale: thirdScale }, { translateY: thirdTranslateY }],
        }}
      >
        <Project
          title={projects[getNextIndex(index + 1)].title}
          image={projects[getNextIndex(index + 1)].image}
          author={projects[getNextIndex(index + 1)].author}
          text={projects[getNextIndex(index + 1)].text}
        />
      </Animated.View>
    </Container>
  );
};

export default ProjectsScreen;

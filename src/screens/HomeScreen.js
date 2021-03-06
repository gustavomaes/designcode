/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable operator-linebreak */
import React, { useEffect, useContext, useState } from 'react';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Platform,
} from 'react-native';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import Card from '../components/Card';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import StoreContext from '../contexts/StoreContext';
import Avatar from '../components/Avatar';
import ModalLogin from '../components/ModalLogin';

const CardsQuery = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subtitle
        caption
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`;

const RootView = styled.View`
  flex: 1;
  background-color: black;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const CardContainer = styled.View`
  flex-direction: row;
  padding-left: 10px;
`;

const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const logos = [
  {
    image: require('../../assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('../../assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('../../assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('../../assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('../../assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('../../assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../../assets/background13.jpg'),
    logo: require('../../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../../assets/avatar.jpg'),
    caption: 'Design and interactive prototype',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../../assets/background11.jpg'),
    logo: require('../../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../../assets/background14.jpg'),
    logo: require('../../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app',
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../../assets/background6.jpg'),
    logo: require('../../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../../assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool',
  },
];
const HomeScreen = ({ navigation }) => {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));
  const { action, setAction, name, setLoginOpen, isLogged } = useContext(
    StoreContext
  );
  const { loading, error, data } = useQuery(CardsQuery);

  const toggleMenu = () => {
    if (action === 'openMenu') {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
      }).start();
      StatusBar.setBarStyle('light-content', true);
    }

    if (action === 'closeMenu') {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
      }).start();
      StatusBar.setBarStyle('dark-content', true);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBarStyle('light-content', true);
    } else {
      StatusBar.setBarStyle('dark-content', true);
    }
  }, []);

  useEffect(() => {
    toggleMenu();
  }, [action]);

  return (
    <RootView>
      <Menu />
      <AnimatedContainer
        style={{
          transform: [{ scale }],
          opacity,
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 20,
                }}
                onPress={() => {
                  console.log('isLogged> ', isLogged);
                  if (isLogged) {
                    setAction('openMenu');
                  } else {
                    setLoginOpen(true);
                  }
                }}
              >
                <Avatar />
              </TouchableOpacity>
              <Title>Welcome back</Title>
              <Name>{name}</Name>
              <NotificationIcon
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 20,
                  paddingTop: 30,
                }}
              />
            </TitleBar>
            <ScrollView
              horizontal
              style={{ padding: 20, paddingLeft: 12 }}
              showsHorizontalScrollIndicator={false}
            >
              {logos.map(({ image, text }) => (
                <Logo image={image} text={text} key={text} />
              ))}
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {data &&
                data.cardsCollection.items.map((card) => (
                  <CardContainer>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.push('SECTIONS', { section: card })
                      }
                      key={card.title}
                    >
                      <Card
                        title={card.title}
                        image={card.image}
                        logo={card.logo}
                        caption={card.caption}
                        subtitle={card.subtitle}
                      />
                    </TouchableOpacity>
                  </CardContainer>
                ))}
            </ScrollView>
            <Subtitle>Popular coursers</Subtitle>
            <CoursesContainer>
              {courses.map((course) => (
                <Course
                  image={course.image}
                  logo={course.logo}
                  subtitle={course.subtitle}
                  title={course.title}
                  avatar={course.avatar}
                  caption={course.caption}
                  author={course.author}
                />
              ))}
            </CoursesContainer>
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
      <ModalLogin />
    </RootView>
  );
};

export default HomeScreen;

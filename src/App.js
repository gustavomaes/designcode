import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import SplashScreen from 'react-native-splash-screen';
import Card from './components/Card';
import { NotificationIcon } from './components/Icons';
import Logo from './components/Logo';
import Course from './components/Course';
import Menu from './components/Menu';

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
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

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Props and Icons',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Static Data and Loop',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design and interactive prototype',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app',
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool',
  },
];
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <Menu />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <TitleBar>
            <Avatar source={require('../assets/avatar.jpg')} />
            <Title>Welcome back</Title>
            <Name>Gustavo</Name>
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
            {cards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                image={card.image}
                logo={card.logo}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular coursers</Subtitle>
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
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default App;

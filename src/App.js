import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import SplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from './components/Card';

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

const NotificationIcon = styled(Ionicons).attrs({
  name: 'ios-notifications',
  color: '#4775f2',
  size: 32,
})`
  position: absolute;
  right: 20;
  top: 5;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <TitleBar>
            <Avatar source={require('../assets/avatar.jpg')} />
            <Title>Welcome back</Title>
            <Name>Gustavo</Name>
            <NotificationIcon />
          </TitleBar>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title="Styled Components"
              image={require('../assets/background2.jpg')}
              logo={require('../assets/logo-react.png')}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              title="Styled Components"
              image={require('../assets/background2.jpg')}
              logo={require('../assets/logo-react.png')}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              title="Styled Components"
              image={require('../assets/background2.jpg')}
              logo={require('../assets/logo-react.png')}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default App;
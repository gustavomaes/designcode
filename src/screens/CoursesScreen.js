import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const CoursesScreen = ({ navigation }) => (
  <Container>
    <Text>CoursesScreen</Text>
    <Button title="CLOSE" onPress={() => navigation.goBack()} />
  </Container>
);

export default CoursesScreen;

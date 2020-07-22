import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const ProjectsScreen = ({ navigation }) => (
  <Container>
    <Text>ProjectsScreen</Text>
    <Button title="CLOSE" onPress={() => navigation.goBack()} />
  </Container>
);

export default ProjectsScreen;

import React from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  flex-direction: row;
  margin: 20px 0;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;

const MenuItem = ({ icon, title, text }) => (
  <Container>
    <IconView>
      <Ionicons name={icon} size={24} color="#546bfb" />
    </IconView>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Container>
);

export default MenuItem;

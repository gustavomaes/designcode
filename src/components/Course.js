/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const screenWidth = Dimensions.get('window').width;

const Container = styled.View`
  width: ${(p) => p.cardWidth};
  height: 335px;
  background: white;
  margin: 10px 10px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
  width: 48px;
  height: 48px;
`;

const Subtile = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 62px;
  height: 75px;
  justify-content: center;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;

const Course = ({ image, logo, subtitle, title, avatar, caption, author }) => {
  const getCardWidth = (totalWidth) => {
    let width = totalWidth - 40;
    if (totalWidth >= 768) {
      width = (totalWidth - 60) / 2;
    }
    if (totalWidth >= 1024) {
      width = (totalWidth - 80) / 3;
    }

    return width;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth(screenWidth));

  const adaptLayout = (dimensions) => {
    console.log('dimensions> ', dimensions);
    setCardWidth(getCardWidth(dimensions.window.width));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', (dimensions) =>
      adaptLayout(dimensions)
    );
  }, []);

  return (
    <Container cardWidth={cardWidth}>
      <Cover>
        <Image source={image} />
        <Logo source={logo} resizeMode="contain" />
        <Subtile>{subtitle}</Subtile>
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Avatar source={avatar} />
        <Caption>{caption}</Caption>
        <Author>{author}</Author>
      </Content>
    </Container>
  );
};

export default Course;

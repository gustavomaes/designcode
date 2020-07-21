/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../contexts/StoreContext';

const Image = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
`;

const Avatar = () => {
  const [photo, setPhoto] = useState(
    'https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg',
  );
  const { setName } = useContext(StoreContext);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('https://randomuser.me/api').then(
      (res) => res.json(),
    ).then((res) => {
      const user = res.results[0];
      setName(`${user.name.title} ${user.name.first} ${user.name.last}`);
      setPhoto(user.picture.thumbnail);
    });
  }, []);

  return <Image source={{ uri: photo }} />;
};

export default Avatar;

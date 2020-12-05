import React from 'react';
import Plus from 'react-native-vector-icons/AntDesign';
import Dots from 'react-native-vector-icons/Entypo';

import { Container, Image, Info, Title, Author, Avatar, Name } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/pt/2/2d/Currents_Tame_Impala.png',
        }}
      />
      <Plus
        name="pluscircle"
        size={34}
        style={{ position: 'absolute', right: 5, bottom: 5, color: 'white' }}
      />
      <Info>
        <Title>Tame Impala - cover</Title>
        <Dots
          name="dots-three-horizontal"
          size={16}
          style={{ textAlign: 'right' }}
        />
      </Info>
      <Author>
        <Avatar
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Governor_David_Ige.jpg/200px-Governor_David_Ige.jpg',
          }}
        />
        <Name>Fernando Pando</Name>
      </Author>
    </Container>
  );
};

export default Card;

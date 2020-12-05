import styled from 'styled-components/native';

export const Container = styled.View`
  height: 130px;
  width: 130px;
`;

export const Image = styled.Image`
  border-radius: 25px;
  height: 100%;
  width: 100%;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: top;
  margin: 5px 3px;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  line-height: 11px;
`;

export const Author = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

export const Name = styled.Text`
  margin-left: 5px;
  font-size: 12px;
`;

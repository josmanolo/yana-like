import React from "react";
import styled from "styled-components/native";
import { useAppSelector } from '../../../../app/hooks';

const Info = styled.View`
  width: 100%;
  align-items: center;
`;

const ImageDefault = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.common.lightGray};
  margin-bottom: 55px;
`;

const TextInfoContainer = styled.View`
  width: 100%;
  margin-bottom: 55px;
`;

const SubtitleInfo = styled.Text`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.common.gray};
  text-align: center;
  margin-bottom: 7px;
  letter-spacing: -.5px;
`;

const UserText = styled.Text`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -.5px;
`;

const UserInfo: React.FC = () => {

  const { username, email } = useAppSelector(state => state.user);

  return (
    <Info>
      <ImageDefault />
      <TextInfoContainer>
        <SubtitleInfo>Nombre de Usuario</SubtitleInfo>
        <UserText>{username}</UserText>
      </TextInfoContainer>
      <TextInfoContainer>
        <SubtitleInfo>Correo Electrónico</SubtitleInfo>
        <UserText>{email}</UserText>
      </TextInfoContainer>
    </Info>
  );
};

export default UserInfo;

import React, { ReactElement, useEffect } from "react";
import { MainRoutes } from "../../routes/routes";
import { MainNavigationProp } from "../../routes/types";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterForm from "./RegisterForm";
import { useAppSelector } from "../../app/hooks";

type RegisterScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Register>;
};

interface IProps {
  font?: string;
}

const RegisterContainer = styled.View`
  background-color: #fff;
  align-items: center;
  padding: 35px 20px 0;
  flex: 1;
`;

const TextMain = styled.Text<IProps>`
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 45px 0;
  letter-spacing: -.5px;
`;

const Register: React.FC<RegisterScreenProps> = ({
  navigation,
}): ReactElement => {
  const { isSuccess } = useAppSelector((state) => state.user);

  useEffect(() => {
    isSuccess && navigation.navigate(MainRoutes.Main);
  }, [isSuccess]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <RegisterContainer>
        <TextMain>Regístrate</TextMain>
        <RegisterForm />
      </RegisterContainer>
    </SafeAreaView>
  );
};

export default Register;

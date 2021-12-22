import React, { ReactElement, useState } from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { Input, MainButton } from "../../../common/components";
import { useAppDispatch } from "../../../app/hooks";
import { register } from "../registerSlice";


const Form = styled.View`
  width: 100%;
  justify-content: space-between;
  height: 100%;
  flex: 1;
`;

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    dispatch(
      register({
        username: user,
        email: email,
        password: password,
        isSuccess: true,
      })
    );
  };

  const isNotFilled = () => {
    return user && email && password ? false : true
  }

  return (
    <Form>
      <View>
        <Input
          placeholder="Nombre de usuario"
          placeholderTextColor={theme.color.common.gray}
          onChangeText={(text) => setUser(text)}
          type="primary"
        />
        <Input
          placeholder="Correo electrónico"
          placeholderTextColor={theme.color.common.gray}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          type="primary"
        />
        <Input
          placeholder="Contraseña"
          placeholderTextColor={theme.color.common.gray}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          type="primary"
        />
      </View>
      <MainButton type="primary" text="Crear Cuenta" onPress={onSubmit} disabled={isNotFilled()}/>
    </Form>
  );
};

export default RegisterForm;

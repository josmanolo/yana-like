import React, { useState } from "react";
import styled from "styled-components/native";
import { ButtonProps, IProps } from "./types";

const Button = styled.Pressable<ButtonProps>`
  width: 100%;
  padding: 25px 15px;
  border-radius: 30px;
  transform: scale(${(props) => (props.isPressed ? 0.95 : 1)});
  opacity: ${(props) => (props.isPressed ? .6 : 1)};

  ${(props) => {
    switch (props.type) {
      case "primary":
        return `background-color: ${props.theme.color.primary.main}`;
      case "secondary":
        return `background-color: ${props.theme.color.buttons.main}`;
      default:
        return `background-color: ${props.theme.color.common.gray}`;
    }
  }}
`;

const BtnText = styled.Text<IProps>`
  width: 100%;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: -.5px;

  ${(props) => {
    switch (props.type) {
      case "primary":
        return `color: ${props.theme.color.primary.text}`;
      case "secondary":
        return `color: ${props.theme.color.buttons.text}`;
      default:
        return `color: ${props.theme.color.common.white}`;
    }
  }}
`;

const MainButton: React.FC<ButtonProps> = ({ type, text, onPress, disabled }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const onPressIn = () => setIsPressed(true);
  const onPressOut = () => setIsPressed(false);

  return (
    <Button
      type={type}
      onPress={onPress}
      isPressed={isPressed}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
    >
      <BtnText type={type}>{text}</BtnText>
    </Button>
  );
};

export default MainButton;

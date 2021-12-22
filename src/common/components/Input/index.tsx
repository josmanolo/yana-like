import styled from "styled-components/native";
import { InputProps } from "./types";

const MainInput = styled.TextInput<InputProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 25px;
  font-size: 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  margin-top: 10px;
  letter-spacing: -.5px;

  ${(props) => {
    switch (props.type) {
      case "primary":
        return `background-color: ${props.theme.color.secondary.main}; `;
      case "secondary":
        return `
            background-color: ${props.theme.color.common.white};
            shadow-color: #000;
            shadow-offset: 0px 3px;
            shadow-opacity: 0.15;
            shadow-radius: 5px;
            elevation: 1; 
        `;
      default:
        return `background-color: ${props.theme.color.common.gray}`;
    }
  }}
`;

const Input: React.FC<InputProps> = ({
  width,
  placeholder,
  placeholderTextColor,
  onChangeText,
  keyboardType,
  secureTextEntry,
  type,
  value
}) => {
  return (
    <MainInput
      width={width}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      type={type}
      value={value}
    />
  );
};

export default Input;

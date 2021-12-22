import React, { useState, useEffect } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styled from "styled-components/native";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { Input } from "../../../../common/components";
import { addBotMessage, addMessage } from "../../mainSlice";


interface IconButtonProps {
    isActive?: boolean
}

const MessageInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const IconButton = styled.Pressable<IconButtonProps>`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.color.common.lightGray};
  background-color: ${(props) => (props.isActive ? props.theme.color.primary.main : props.theme.color.common.lightGray)}
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 25px;
  height: 25px;
`;

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.chat);

  useEffect(() => {
    messages.length === 1 &&
    dispatch(addBotMessage());
  }, [])

  const onSubmit = () => {
    dispatch(
      addMessage({
        message: message,
        sender: "user",
      })
    );
    setTimeout(() => {
      dispatch(addBotMessage());
    }, 700);
    Keyboard.dismiss();
    setMessage("");
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-100}>
      <MessageInputContainer>
        <Input
          width="75%"
          type="secondary"
          placeholder="Ingresa aquí tu mensaje"
          onChangeText={(text) => setMessage(text)}
          value={message}
        />
        <IconButton onPress={onSubmit} isActive={message.length > 0} disabled={message.length > 0 ? false : true}>
          <Image source={require("../../../../../assets/send-icon.png")}></Image>
        </IconButton>
      </MessageInputContainer>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

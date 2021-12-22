import React, { useRef, useState, useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { useAppSelector } from "../../../app/hooks";
import MessageInput from "./MessageInput";
import moment from "moment";
import "moment/locale/es";

const ChatContainer = styled.View`
  width: 100%;
  background-color: #fff;
  flex-wrap: wrap;
  height: 100%;
`;

const Messages = styled.ScrollView`
  width: 100%;
  transform: rotate(180deg);
  direction: rtl;
  flex: 1;
`;

const MessageWrapper = styled.View`
  width: 100%;
  flex-direction: column;
`;

const MessageContainer = styled.View`
  transform: rotate(180deg);
  padding: 20px;
  border-radius: 50px;
  max-width: 80%;
  direction: ltr;
`;

const MessageDate = styled.Text`
  width: 100%;
  text-align: center;
  padding: 20px;
  color: ${({ theme }) => theme.color.secondary.text};
  transform: rotate(180deg);
`;

const MessageBot = styled(MessageContainer)`
  background-color: ${({ theme }) => theme.color.secondary.main};
  margin-right: auto;
`;

const MessageUser = styled(MessageContainer)`
  background-color: ${({ theme }) => theme.color.tertiary.main};
  margin-left: auto;
`;

const chatText = styled.Text`
  font-weight: 300;
  letter-spacing: -.5px;
`;

const Bot = styled(chatText)`
  color: ${({ theme }) => theme.color.secondary.text};
`;

const User = styled(chatText)`
  color: ${({ theme }) => theme.color.common.white};
`;

const Chat: React.FC = () => {

  const [date, setDate] = useState("initialState")
  const scrollViewRef = useRef();
  const messages = useAppSelector((state) => state.chat);
  const messagesChat = [...messages].reverse()

  console.log(messages)

  

  useEffect(() => {
    const dateConfig = moment().locale("es").format("ddd DD [de] MMMM [-] h:mma");
    setDate(dateConfig)
  }, [])
  


  return (
    <KeyboardAvoidingView behavior="padding">
      <ChatContainer>
        <Messages
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollTo()}
        >
          <MessageWrapper>
            
            {messagesChat.map((msg, i) => { 
              switch (msg.sender) {
                case "bot":
                  if(msg.firstDate){
                    return (<MessageDate>{msg.firstDate}</MessageDate>)
                  } else {
                    return (<MessageBot key={`${i}bot`}><Bot>{msg.message}</Bot></MessageBot>)
                  }
                  
                case "user":
                  return (<MessageUser key={`${i}user`}><User>{msg.message}</User></MessageUser>)
                default:
                  break;
              }  
            })}
            
          </MessageWrapper>
        </Messages>

        <MessageInput />
      </ChatContainer>
    </KeyboardAvoidingView>
  );
};

export default Chat;

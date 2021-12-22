import React from 'react'
import { NativeModules, Text } from 'react-native'
import styled from 'styled-components/native'
import { getPersistor } from '../../../app/store';
import { MainButton } from '../../../common/components';
import UserInfo from './UserInfo';

const AccountContainer = styled.View`
    width: 100%;
    flex: 1;
    background-color: #fff;
    padding: 55px 20px 0;
    justify-content: space-between;
    height: 100%;
    flex: 1;
`;

const Account: React.FC = () => {
    const persistor = getPersistor();
    const handleSignOut = () => {
        persistor.purge().then(() => NativeModules.DevSettings.reload());
    }

    return(
        <AccountContainer>
            <UserInfo />
            <MainButton type='secondary' text='Cerrar Sesión' onPress={handleSignOut}/>
        </AccountContainer>
    )
}

export default Account;
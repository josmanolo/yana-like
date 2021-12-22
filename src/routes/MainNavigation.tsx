import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack, MainRoutes } from './routes';
import Register from '../features/Register';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from '../features/Main';
import { useAppSelector } from '../app/hooks';

const MainNavigation: React.FC = () => {
    const { isSuccess } = useAppSelector(state => state.user);

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainStack.Navigator initialRouteName={!isSuccess ? MainRoutes.Register : MainRoutes.Main} screenOptions={{headerShown: false}}>
                    <MainStack.Screen name={MainRoutes.Register} component={Register} />
                    <MainStack.Screen name={MainRoutes.Main} component={Main} />
                </MainStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default MainNavigation;
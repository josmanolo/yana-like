import { createStackNavigator } from '@react-navigation/stack'

export enum MainRoutes {
    Register = 'Register',
    Main = 'Main',
}

export type MainStackParamList = {
    [MainRoutes.Register]: undefined,
    [MainRoutes.Main]: undefined,
}

export const MainStack = createStackNavigator<MainStackParamList>();
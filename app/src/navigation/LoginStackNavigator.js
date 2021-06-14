import React from 'react';
import NavigatorConstant from './NavigatorConstant';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenLogin from '../../ui/screens/screenLogin/ScreenLogin';

const Stack = createStackNavigator();

const LoginStackNavigator = () =>{
    return(
        <Stack.Navigator
        initialRouteName={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen
            name={NavigatorConstant.LOGIN_STACK.LOGIN_SCREEN}
            component={ScreenLogin}
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    );
}

export default LoginStackNavigator;
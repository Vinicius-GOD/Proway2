import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StartPage } from '../pages/StartPage';
import { UserName } from '../pages/UserName';
import { LoanSelector } from '../pages/LoanSelector';


import { theme } from '../global/styles/theme';
import { MaterialIcons } from '@expo/vector-icons';

import { Platform } from 'react-native';
import { MyContracts } from '../pages/MyContracts';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.button,
                inactiveTintColor: theme.colors.buttonText,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                },

            }}>
            <AppTab.Screen
                name="Solicitar mpréstimo"
                component={LoanSelector}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <AppTab.Screen
                name="Meus Contratos"
                component={MyContracts}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;
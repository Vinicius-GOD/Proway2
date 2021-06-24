import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StartPage } from '../pages/StartPage';
import { UserName } from '../pages/UserName';
import { LoanSelector } from '../pages/LoanSelector';
import { Confirmation } from '../pages/Confirmation';
import { MyContracts } from '../pages/MyContracts';


import { theme } from '../global/styles/theme';
import AuthRoutes from './tab.routes';
import { LoanConfirm } from '../pages/LoanConfirm';





const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: theme.colors.backgrund
            },
        }}
    >
        <stackRoutes.Screen
            name="StartPage"
            component={StartPage}
        />

        <stackRoutes.Screen
            name="UserName"
            component={UserName}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
        <stackRoutes.Screen
            name="LoanConfirm"
            component={LoanConfirm}
        />

        <stackRoutes.Screen
            name="LoanSelector"
            component={AuthRoutes}
        />



        <stackRoutes.Screen
            name="MyContracts"
            component={AuthRoutes}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;
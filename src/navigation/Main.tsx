import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen, LoanApplicationScreen } from '@screens';
import { MainStackParamList } from './types';
import { noHeader } from '@config';
import { routes } from './routes';

const MainStackNav = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <MainStackNav.Navigator initialRouteName={routes.DASHBOARD}>
      <MainStackNav.Screen
        {...noHeader}
        name={routes.DASHBOARD}
        component={DashboardScreen}
      />
      <MainStackNav.Screen
        {...noHeader}
        name={routes.APPLY}
        component={LoanApplicationScreen}
      />
    </MainStackNav.Navigator>
  );
};

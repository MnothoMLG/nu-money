import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DashboardScreen,
  ApplicationScreen,
  LoanApplicationsScreen,
} from '@screens';
import { MainStackParamList } from './types';
import { noHeader } from '@config';
import { routes } from './routes';
import Confirmation from '@screens/confirmation';

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
        component={ApplicationScreen}
      />

      <MainStackNav.Group screenOptions={{ presentation: 'modal' }}>
        <MainStackNav.Screen
          {...noHeader}
          name={routes.APPLICATIONS}
          component={LoanApplicationsScreen}
        />
      </MainStackNav.Group>

      <MainStackNav.Screen
        {...noHeader}
        name={routes.CONFIRMATION}
        component={Confirmation}
      />
    </MainStackNav.Navigator>
  );
};

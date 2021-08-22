import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION, _handleNotifications } from '../shared';
import { BottomTab, WeeklyLimitScreen } from '../screens';
const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.BOTTOM_TABS_DASHBOARD}>
      <Stack.Screen component={BottomTab} name={NAVIGATION.BOTTOM_TABS_DASHBOARD} options={{ headerShown: false }} />
      <Stack.Screen component={WeeklyLimitScreen} name={NAVIGATION.WEEKLY_LIMIT} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

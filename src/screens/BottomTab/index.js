
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabScreen, DebitCardTabScreen, PaymentsTabScreen, CreditTabScreen, ProfileTabScreen } from './Screens';
import { CustomBottomTab } from '../../components';
import { NAVIGATION, COLORS, _scaleText } from '../../shared';

const Tab = createBottomTabNavigator();


const BottomTab = ({
}) => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            backBehavior='initialRoute'
            tabBar={(props) => <CustomBottomTab {...props} />}
        >
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.HOME} component={HomeTabScreen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.DEBIT_CARD} component={DebitCardTabScreen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.PAYMENTS} component={PaymentsTabScreen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.CREDIT} component={CreditTabScreen} />
            <Tab.Screen
                name={NAVIGATION.BOTTOM_TABS.PROFILE} component={ProfileTabScreen} />
        </Tab.Navigator >
    )
};

export default BottomTab;


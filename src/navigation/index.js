import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './AppNavigator';
import { useDispatch } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import { updateInternetStatus } from '../redux/actions';

export function RootNavigator() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected, isInternetReachable }) => {
      dispatch(updateInternetStatus(isConnected))
    });
    return unsubscribe
  }, [])
  /**
   * TODO- Replace user value
   */
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

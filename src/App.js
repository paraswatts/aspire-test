import React, { useEffect } from 'react';
import { RootNavigator } from './navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { LoaderHOC } from './components';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { View } from 'react-native';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{ flex: 1 }}>
          <LoaderHOC>
            <RootNavigator />
          </LoaderHOC>
        </View>
      </PersistGate>
    </Provider>
  );
}

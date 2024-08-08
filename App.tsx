import React from 'react'
import StackNavigation from './src/navigations/StackNavigation'
import { Provider } from 'react-redux'
import store, { persistor } from './src/redux/store'
import FlashMessage from 'react-native-flash-message'
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  )
}

export default App
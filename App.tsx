import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'; // Import the store and persistor

import { View, Text, Button } from 'react-native';

const App = () => {
  const handleIncrement = () => {
    store.dispatch({ type: 'INCREMENT' });
    console.log("first")
  };

  const handleDecrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Counter: {store.getState().counter}</Text>
          <Button title="Increment" onPress={handleIncrement} />
          <Text>Hello</Text>
          <Button title="Decrement" onPress={handleDecrement} />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers'; // Import your root reducer

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''], // Add the names of the reducers to persist
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
const store = createStore(persistedReducer);

// Create the persisted store
const persistor = persistStore(store);

export {store, persistor};

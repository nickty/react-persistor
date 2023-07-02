import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers'; // Your root reducer file

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Define any specific reducers to persist if needed
  // whitelist: ['auth', 'settings'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

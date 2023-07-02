import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {YourReducer} from './yourReducer'; // Replace YourReducer with your actual reducer

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Add any reducers that you want to persist here
  whitelist: ['yourReducer'],
};

const rootReducer = combineReducers({
  yourReducer: YourReducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

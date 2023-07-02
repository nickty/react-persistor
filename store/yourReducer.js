import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  // Your initial state here
};

const yourReducer = createSlice({
  name: 'yourReducer',
  initialState,
  reducers: {
    // Your reducer actions here
  },
});

export const {actions} = yourReducer;
export default yourReducer.reducer;

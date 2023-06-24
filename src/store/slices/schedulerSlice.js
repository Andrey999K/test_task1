import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: []
};

export const schedulerReducer = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    updateItems: (state, action) => {
      console.log(action.payload);
      state.items = action.payload;
    }
  }
});

export const { updateItems } = schedulerReducer.actions;
export default schedulerReducer.reducer;
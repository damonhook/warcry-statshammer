import { createSlice } from '@reduxjs/toolkit';
import { IConfigStore } from 'types/store';

const INITIAL_STATE: IConfigStore = {
  darkMode: false,
};

const toggleDarkMode = (state: IConfigStore) => {
  state.darkMode = !state.darkMode;
};

export const config = createSlice({
  name: 'config',
  initialState: INITIAL_STATE,
  reducers: {
    toggleDarkMode,
  },
});

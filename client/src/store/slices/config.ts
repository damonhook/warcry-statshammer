import { createSlice } from '@reduxjs/toolkit';
import { TToughnessConfigValue } from 'types/config';
import { IConfigStore } from 'types/store';

const INITIAL_STATE: IConfigStore = {
  darkMode: false,
  toughnessRange: {
    min: 'auto',
    max: 'auto',
  },
};

const toggleDarkMode = (state: IConfigStore) => {
  state.darkMode = !state.darkMode;
};

const editToughnessRange = (
  state: IConfigStore,
  action: { payload: { toughness: { min?: TToughnessConfigValue; max?: TToughnessConfigValue } } },
) => {
  const { toughness } = action.payload;
  state.toughnessRange = {
    ...state.toughnessRange,
    ...toughness,
  };
};

export const config = createSlice({
  name: 'config',
  initialState: INITIAL_STATE,
  reducers: {
    toggleDarkMode,
    editToughnessRange,
  },
});

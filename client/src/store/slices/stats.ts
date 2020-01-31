import { createSlice } from '@reduxjs/toolkit';
import { TResults } from 'types/stats';
import { IStatsStore } from 'types/store';

const INITIAL_STATE: IStatsStore = {
  pending: false,
  results: [],
  error: false,
};

const fetchStatsPending = (state: IStatsStore) => {
  state.pending = true;
  state.error = false;
};

const fetchStatsSuccess = (state: IStatsStore, action: { payload: { results: TResults } }) => {
  const { results } = action.payload;
  state.pending = false;
  state.error = false;
  state.results = results;
};

const fetchStatsError = (state: IStatsStore) => {
  state.pending = false;
  state.results = [];
  state.error = true;
};

export const stats = createSlice({
  name: 'stats',
  initialState: INITIAL_STATE,
  reducers: {
    fetchStatsPending,
    fetchStatsSuccess,
    fetchStatsError,
  },
});

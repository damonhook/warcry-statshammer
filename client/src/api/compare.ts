import fetch from 'cross-fetch';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import store from 'store';
import { getSanitizedFighters } from 'store/selectors';
import { notifications as notificationsStore, stats as statsStore } from 'store/slices';
import { IStore } from 'types/store';

type TDispatch = ThunkDispatch<IStore, void, Action>;

/**
 * Fetch the comparison data from the API using /api/compare
 */
export const fetchCompare = () => async (dispatch: TDispatch) => {
  dispatch(statsStore.actions.fetchStatsPending());
  try {
    const state = store.getState();
    const fighters = getSanitizedFighters(state);
    const toughness = state.config.toughnessRange;
    if (!fighters || !fighters.length) {
      dispatch(statsStore.actions.fetchStatsSuccess({ results: [] }));
      return;
    }
    const req = await fetch('/api/compare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fighters, toughness }),
    });
    const res = await req.json();
    dispatch(statsStore.actions.fetchStatsSuccess({ results: res.results }));
  } catch (err) {
    dispatch(statsStore.actions.fetchStatsError());
    dispatch(
      notificationsStore.actions.addNotification({
        message: 'Failed to fetch stats',
        variant: 'error',
        action: {
          label: 'Retry',
          onClick: () => dispatch(fetchCompare()),
        },
      }),
    );
  }
};

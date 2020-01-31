import fetch from 'cross-fetch';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import store from 'store';
import { stats as statsStore } from 'store/slices';
import { IProfile } from 'types/fighter';
import { IStore } from 'types/store';

type TDispatch = ThunkDispatch<IStore, void, Action>;

interface ISanitizedFighter {
  name: string;
  profile: IProfile;
}
const sanitizeFighters = (): ISanitizedFighter[] => {
  return store.getState().fighters.reduce<ISanitizedFighter[]>((acc, fighter) => {
    const profile = fighter.profiles.find(p => p.active);
    if (profile) acc.push({ name: fighter.name, profile });
    return acc;
  }, []);
};

export const fetchCompare = () => async (dispatch: TDispatch) => {
  dispatch(statsStore.actions.fetchStatsPending());
  try {
    const fighters = sanitizeFighters();
    if (!fighters) dispatch(statsStore.actions.fetchStatsSuccess({ results: [] }));
    const req = await fetch('/api/compare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fighters }),
    });
    const res = await req.json();
    dispatch(statsStore.actions.fetchStatsSuccess({ results: res.results }));
  } catch (err) {
    dispatch(statsStore.actions.fetchStatsError());
  }
};

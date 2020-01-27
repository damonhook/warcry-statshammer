import nanoid from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { TFightersStore } from 'types/store';
import { IProfile } from 'types/fighter';

const INITIAL_STATE: TFightersStore = [];
const DEFAULT_PROFILE: IProfile = {
  active: true,
  range: 1,
  attacks: 1,
  strength: 3,
  damage: {
    hit: 1,
    crit: 2,
  },
};

const addFighter = (state: TFightersStore) => {
  state.push({
    name: '',
    uuid: nanoid(),
    profiles: [DEFAULT_PROFILE],
  });
};

const editFighterName = (state: TFightersStore, action: { payload: { index: number; name: string } }) => {
  const { index, name } = action.payload;
  state[index].name = name;
};

const deleteFighter = (state: TFightersStore, action: { payload: { index: number } }) => {
  const { index } = action.payload;
  return state.filter((_, i) => i !== index);
};

const moveFighter = (state: TFightersStore, action: { payload: { index: number; newIndex: number } }) => {
  const { index, newIndex } = action.payload;
  const sanitizedNewIndex = Math.min(Math.max(newIndex, 0), state.length - 1);
  state.splice(sanitizedNewIndex, 0, ...state.splice(index, 1));
};

const addProfile = (state: TFightersStore, action: { payload: { index: number } }) => {
  const { index } = action.payload;
  state[index].profiles.push({
    ...DEFAULT_PROFILE,
    active: !state[index].profiles.length,
  });
};

const setActiveProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number } },
) => {
  const { index, profileIndex } = action.payload;
  state[index].profiles = state[index].profiles.map((profile, i) => ({
    ...profile,
    active: i === profileIndex,
  }));
};

const editProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number; name: string; value: any } },
) => {
  const { index, profileIndex, name, value } = action.payload;
  state[index].profiles[profileIndex][name] = value;
};

const moveProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number; newProfileIndex: number } },
) => {
  const { index, profileIndex, newProfileIndex } = action.payload;
  const fighter = state[index];
  const sanitizedNewIndex = Math.min(Math.max(newProfileIndex, 0), fighter.profiles.length - 1);
  fighter.profiles.splice(sanitizedNewIndex, 0, ...fighter.profiles.splice(profileIndex, 1));
};

const deleteProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number } },
) => {
  const { index, profileIndex } = action.payload;
  state[index].profiles = state[index].profiles.filter((_, i) => i !== profileIndex);
};

export const fighters = createSlice({
  name: 'fighters',
  initialState: INITIAL_STATE,
  reducers: {
    addFighter,
    editFighterName,
    moveFighter,
    deleteFighter,
    addProfile,
    setActiveProfile,
    editProfile,
    moveProfile,
    deleteProfile,
  },
});

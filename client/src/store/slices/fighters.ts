import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { IFighter, IProfile } from 'types/fighter';
import { TFightersStore } from 'types/store';

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

const ensureOneActiveProfile = (fighter: IFighter): IFighter => {
  const activeIndexes = fighter.profiles.reduce<number[]>(
    (acc, { active }, index) => (active ? [...acc, index] : acc),
    [],
  );
  if (activeIndexes.length === 1) return fighter;
  fighter.profiles = fighter.profiles.map((profile) => ({ ...profile, active: false }));
  const [firstActive] = activeIndexes;
  fighter.profiles[firstActive ?? 0].active = true;
  return fighter;
};

const addFighter = (state: TFightersStore) => {
  state.push({
    name: '',
    uuid: nanoid(),
    profiles: [{ ...DEFAULT_PROFILE, uuid: nanoid() }],
  });
};

const insertFighter = (
  state: TFightersStore,
  action: { payload: { fighter: IFighter; index?: number | null } },
) => {
  const { index } = action.payload;
  const { name, profiles } = action.payload.fighter;
  const fighter: IFighter = {
    name,
    uuid: nanoid(),
    profiles: (profiles ?? [{ ...DEFAULT_PROFILE }]).map((p) => ({ ...p, uuid: nanoid() })),
  };
  if (typeof index === 'number' && index >= 0 && index < state.length) {
    state.splice(index, 0, fighter);
  } else {
    state.push(fighter);
  }
  ensureOneActiveProfile(fighter);
};

const editFighterName = (state: TFightersStore, action: { payload: { index: number; name: string } }) => {
  const { index, name } = action.payload;
  state[index].name = name;
};

const deleteFighter = (state: TFightersStore, action: { payload: { index: number } }) => {
  const { index } = action.payload;
  return state.filter((_, i) => i !== index);
};

const copyFighter = (state: TFightersStore, action: { payload: { index: number } }) => {
  const { index } = action.payload;
  return insertFighter(state, { payload: { fighter: state[index] } });
};

const moveFighter = (state: TFightersStore, action: { payload: { index: number; newIndex: number } }) => {
  const { index, newIndex } = action.payload;
  const sanitizedNewIndex = Math.min(Math.max(newIndex, 0), state.length - 1);
  state.splice(sanitizedNewIndex, 0, ...state.splice(index, 1));
};

const addProfile = (state: TFightersStore, action: { payload: { index: number } }) => {
  const { index } = action.payload;
  const fighter = state[index];
  fighter.profiles.push({
    ...DEFAULT_PROFILE,
    uuid: nanoid(),
    active: false,
  });
  ensureOneActiveProfile(fighter);
};

const insertProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profile: IProfile; profileIndex?: number | null } },
) => {
  const { index, profileIndex, profile } = action.payload;

  const fighter = state[index];
  const newProfile = {
    ...profile,
    uuid: nanoid(),
  };
  if (typeof profileIndex === 'number' && profileIndex >= 0 && profileIndex < fighter.profiles.length) {
    fighter.profiles.splice(profileIndex, 0, newProfile);
  } else {
    fighter.profiles.push(newProfile);
  }
  state[index] = ensureOneActiveProfile(fighter);
};

const setActiveProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number } },
) => {
  const { index, profileIndex } = action.payload;
  const fighter = state[index];
  fighter.profiles = fighter.profiles.map((profile, i) => ({
    ...profile,
    active: i === profileIndex,
  }));
  ensureOneActiveProfile(fighter);
};

const editProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number; name: string; value: any } },
) => {
  const { index, profileIndex, name, value } = action.payload;
  const fighter = state[index];
  fighter.profiles[profileIndex][name] = value;
  ensureOneActiveProfile(fighter);
};

const moveProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number; newProfileIndex: number } },
) => {
  const { index, profileIndex, newProfileIndex } = action.payload;
  const fighter = state[index];
  const sanitizedNewIndex = Math.min(Math.max(newProfileIndex, 0), fighter.profiles.length - 1);
  fighter.profiles.splice(sanitizedNewIndex, 0, ...fighter.profiles.splice(profileIndex, 1));
  ensureOneActiveProfile(fighter);
};

const deleteProfile = (
  state: TFightersStore,
  action: { payload: { index: number; profileIndex: number } },
) => {
  const { index, profileIndex } = action.payload;
  const fighter = state[index];
  fighter.profiles = fighter.profiles.filter((_, i) => i !== profileIndex);
  ensureOneActiveProfile(fighter);
};

export const fighters = createSlice({
  name: 'fighters',
  initialState: INITIAL_STATE,
  reducers: {
    addFighter,
    insertFighter,
    editFighterName,
    moveFighter,
    deleteFighter,
    copyFighter,
    addProfile,
    insertProfile,
    setActiveProfile,
    editProfile,
    moveProfile,
    deleteProfile,
  },
});

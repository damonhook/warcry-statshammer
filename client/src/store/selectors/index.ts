import { IProfile } from 'types/fighter';
import { IStore } from 'types/store';

/**
 * A Sanitized fighter is one that is both active, and only contains only the one active profile.
 * This is the format the API expects
 */
export interface ISanitizedFighter {
  name: string;
  profile: IProfile;
}

/**
 * Get the current fighters in a sanitized form that the API expects
 * @param state The current state of the redux store
 */
export const getSanitizedFighters = (state: IStore): ISanitizedFighter[] =>
  state.fighters.reduce<ISanitizedFighter[]>((acc, fighter) => {
    const profile = fighter.profiles.find(p => p.active);
    if (profile) acc.push({ name: fighter.name, profile });
    return acc;
  }, []);

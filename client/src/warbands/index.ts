import IronGolems from './IronGolems';
import UntamedBeasts from './UntamedBeasts';
import { IWarband } from './warbands.types';

const warbands: IWarband[] = [IronGolems, UntamedBeasts].sort((a, b) => a.name.localeCompare(b.name));

export default warbands;

import CorvusCabal from './CorvusCabal';
import CypherLords from './CypherLords';
import DaughtersOfKhaine from './DaughtersOfKhaine';
import IdonethDeepkin from './IdonethDeepkin';
import IronGolems from './IronGolems';
import SplinteredFang from './SplinteredFang';
import TheUnmade from './TheUnmade';
import UntamedBeasts from './UntamedBeasts';
import Vanguard from './Vanguard';
import { IWarband } from './warbands.types';

const warbands: IWarband[] = [
  CorvusCabal,
  CypherLords,
  DaughtersOfKhaine,
  IdonethDeepkin,
  IronGolems,
  SplinteredFang,
  TheUnmade,
  UntamedBeasts,
  Vanguard,
];

// export default warbands.sort((a, b) => a.name.localeCompare(b.name));
export default warbands;

import CorvusCabal from './CorvusCabal';
import CypherLords from './CypherLords';
import IronGolems from './IronGolems';
import SplinteredFang from './SplinteredFang';
import TheUnmade from './TheUnmade';
import UntamedBeasts from './UntamedBeasts';
import { IWarband } from './warbands.types';

const warbands: IWarband[] = [CorvusCabal, CypherLords, IronGolems, SplinteredFang, TheUnmade, UntamedBeasts];

export default warbands.sort((a, b) => a.name.localeCompare(b.name));

import { IFighter } from 'types/fighter';

export type TAlliance = 'Chaos' | 'Death' | 'Desctruction' | 'Order';

export interface IWarband {
  name: string;
  alliance: TAlliance;
  isAos: boolean;
  fighters: IFighter[];
}

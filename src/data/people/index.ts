import { drSarahChen } from './dr-sarah-chen';
import { marcusJohnson } from './marcus-johnson';
import { aishaPatel } from './aisha-patel';
import { elenaRodriguez } from './elena-rodriguez';
import { drJamesMartinez } from './dr-james-martinez';
import { kenjiTanaka } from './kenji-tanaka';
import { amaraOkafor } from './amara-okafor';

export interface PersonContact {
  name: string;
  title: string;
  avatar: string;
  phone: string;
  email: string;
  status: string;
  backstory: string;
  education: Array<{
    institution: string;
    degree: string;
    year: number;
  }>;
  cityOfBirth: string;
  currentCity: string;
  hobbies: string[];
  friends: string[];
  personality: string;
}

export const contacts: PersonContact[] = [
  drSarahChen,
  marcusJohnson,
  aishaPatel,
  elenaRodriguez,
  drJamesMartinez,
  kenjiTanaka,
  amaraOkafor
];

export {
  drSarahChen,
  marcusJohnson,
  aishaPatel,
  elenaRodriguez,
  drJamesMartinez,
  kenjiTanaka,
  amaraOkafor
};

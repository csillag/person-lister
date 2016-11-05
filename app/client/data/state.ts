import { Person } from './person';
import { PersonList } from './wrappers';

export interface AppStateChange {
    persons?: PersonList;
}

export interface AppState {
    getPersons(): PersonList;
    getPersonIndex(id:string): number;

    mutate(change:AppStateChange):AppState;
}

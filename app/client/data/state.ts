import { Person } from './person';
import { PersonList } from './wrappers';

export interface AppStateChange {
    persons?: Person[];
}

export interface AppState {
    getPersons(): PersonList;

    mutate(change:AppStateChange):AppState;
}

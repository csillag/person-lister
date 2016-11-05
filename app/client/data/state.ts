import { Person } from './person';
import { PersonList } from './wrappers';

export interface AppStateChange {
    persons?: PersonList;
    dump?: string;
}

export interface AppState {
    getPersons(): PersonList;
    getPersonIndex(id:string): number;

    getDump(): string;

    mutate(change:AppStateChange):AppState;
}

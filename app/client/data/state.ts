import { Person } from './person';
import { PersonList } from './wrappers';

export interface AppStateChange {
    persons?: PersonList;
    dump?: string;
}

export interface AppState {
    getPersons(): PersonList;
    getDump(): string;

    mutate(change:AppStateChange):AppState;

    getPersonIndex(id:string): number;
    getPersonDump(): string;
}

import { Person } from './person';
import { PersonList } from './wrappers';

export interface AppStateChange {
    persons?: PersonList;
    dump?: string;
    adding?: boolean;
}

export interface AppState {
    getPersons(): PersonList;
    getDataDump(): string;
    isAdding(): boolean;

    mutate(change:AppStateChange):AppState;

    getPersonIndex(id:string): number;
    getPersonDump(): string;
}

import { Person } from './person';

export interface AppState {
    persons?: Person[];
    dataDump?: string;
    isAdding?: boolean;
}

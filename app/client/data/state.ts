import { Person } from './person';

export interface AppState {
    loading?: boolean;
    persons?: Person[];
    dataDump?: string;
    isAdding?: boolean;
    editedPerson?: Person;
}

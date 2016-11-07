import { Person } from './person';

export interface AppState {
    isLoading?: boolean;
    persons?: Person[];
    dataDump?: string;
    isAdding?: boolean;
    editedPerson?: Person;
}

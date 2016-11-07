import { Person } from './person';

export interface AppState {
    isLoading?: boolean;
    dataMessage?: string;
    persons?: Person[];
    dataDump?: string;
    isAdding?: boolean;
    editedPerson?: Person;
}

import { Person } from './person';

// This interface describes the internal state of the app
export interface AppState {
    isLoading?: boolean;    // Are we currently loading the data
    dataMessage?: string;   // Error message, in case the loading failed
    persons?: Person[];     // The list of persons
    dataDump?: string;      // The contents of the data dump window
    isAdding?: boolean;     // Is the "add person" dialog visible?
    editedPerson?: Person;  // The person currently being added
    showGraph?: boolean;    // Is the "Graph" dialog shown?
}

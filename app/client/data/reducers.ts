// The file contains Redux reducer function, defining the behavior
// of the application.

import { Person, createPersonId, addIdToPerson, dropIdFromPerson } from './person';
import { AppState } from './state';
import {
    Action,
    LOAD_PERSONS, LOAD_PERSONS_SUCCESS, LOAD_PERSONS_FAIL,
    DELETE_PERSON, SHOW_DIALOG,
    EDIT_NAME, EDIT_JOB, EDIT_AGE, EDIT_NICK, SET_EMPLOYEE,
    DIALOG_OK, DIALOG_CANCEL,
    SHOW_GRAPH, HIDE_GRAPH
} from './actions';

// Let's assume we got some response from the server.
// But is the returned data really O.K. ?
//
// If not, return the error string.
// If everything is OK, return an empty string.
function getErrorsInResponse(response:any):string {
    if (response.status != 200) return response.statusText;
    if (!Array.isArray(response.data)) {
        return "The loaded data is in the wrong format.";
    }
    return "";
}

// Calculate the next state of the "is loading" flag
function newIsLoading(state:boolean, action:Action):boolean {
    switch (action.type) {
    case LOAD_PERSONS:
        return true;
    case LOAD_PERSONS_SUCCESS:
    case LOAD_PERSONS_FAIL:
        return false;
    default:
        return state;
    }
}

// Calculate the next state of the data  message
function newDataMessage(state:string, action:Action):string {
    if (state == null) { return "No data has been loaded yet." }
    switch (action.type) {
    case LOAD_PERSONS_SUCCESS:
        return getErrorsInResponse(action.payload);
    default:
        return state;
    }
}

// Describe how the person list should react to the various actions
function newPersons(state:Person[], action:Action, editedPerson):Person[] {
    let persons:Person[];
    switch (action.type) {
    case LOAD_PERSONS_SUCCESS:
        if (getErrorsInResponse(action.payload)) return state;
        persons = action.payload.data;
        persons.forEach(addIdToPerson);
        return persons;
    case DELETE_PERSON:
        persons = state.slice();
        persons.splice(action.index, 1);
        return persons;
    case DIALOG_OK:
        persons = state.slice();
        persons.push(editedPerson);
        return persons;
    default:
        return state;
    }
}

// Dump the data about the persons in the exact same format as the example
function getDump(persons:Person[]):string {
    const lines = persons
          .map((p) => dropIdFromPerson(p))           // Get rid of our ID
          .map((p) => JSON.stringify(p, null, " "))  // Conert to a string dump
          .map((p) => p.replace(/\n/g, ""))          // get rid of newlines
          .map((p) => p.replace(/\": /g, "\":"))     // get rid of some extra spaces
    return "===New data:===\n" + "[" + lines.join(",\n") + "]\n";
}

// Describe how the data dump should react to the various actions
function newDataDump(state:string="", action:Action, persons:Person[]):string {
    switch (action.type) {
    case DELETE_PERSON:
    case DIALOG_OK:
        return state + getDump(persons);
    default:
        return state;
    }
}

// Describe how the 'is adding' flag should react to the various actions
function newIsAdding(state:boolean=false, action:Action):boolean {
    switch (action.type) {
    case SHOW_DIALOG:
        return true;
    case DIALOG_OK:
    case DIALOG_CANCEL:
        return false;
    default:
        return state;
    }
}

function mutatePerson(person:Person, change:Object) {
    return Object.assign({}, person, change);
}

// Describe how the fields of the 'add' form should react to the various actions
function newEditedPerson(state:Person, action:Action):Person {
    switch (action.type) {
    case SHOW_DIALOG:
        return {
            id: createPersonId(),
            name: "",
            job: "",
            age: "",
            nick: "",
            employee: false,
        }
    case EDIT_NAME:    return mutatePerson(state, { name: action.data })
    case EDIT_JOB:     return mutatePerson(state, { job: action.data  })
    case EDIT_AGE:     return mutatePerson(state, { age: action.data })
    case EDIT_NICK:    return mutatePerson(state, { nick: action.data })
    case SET_EMPLOYEE: return mutatePerson(state, { employee: action.data })
    default:
        return state;
    }
}

// Describe how the 'showGraph' flag should react to the various actions
function newShowGraph(state:boolean=false, action:Action):boolean {
    switch (action.type) {
    case SHOW_GRAPH:
        return true;
    case HIDE_GRAPH:
        return false;
    default:
        return state;
    }
}


// This is the overall reducer function, which combines the behaviours
// of the different components of the application
export function getNextState(state:AppState={}, action:Action):AppState {
    const isLoading = newIsLoading(state.isLoading, action);
    const dataMessage = newDataMessage(state.dataMessage, action);
    const persons = newPersons(state.persons, action, state.editedPerson);
    const dataDump = newDataDump(state.dataDump, action, persons);
    const isAdding = newIsAdding(state.isAdding, action);
    const editedPerson = newEditedPerson(state.editedPerson, action);
    const showGraph = newShowGraph(state.showGraph, action);
    return {
        isLoading,
        dataMessage,
        persons,
        dataDump,
        isAdding,
        editedPerson,
        showGraph
    }
};

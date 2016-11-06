// The file containes Redux reducer function

import { Person, createPersonId, addIdToPerson, dropIdFromPerson } from './person';
import { AppState } from './state';
import {
    Action, REPLACE_PERSONS, DELETE_PERSON, SHOW_DIALOG,
    EDIT_NAME, EDIT_JOB, EDIT_AGE, EDIT_NICK, SET_EMPLOYEE,
    DIALOG_OK, DIALOG_CANCEL
} from './actions';

function mutateState(state:AppState, change:AppState) {
    return Object.assign({}, state, change);
}

// Describe how the person list should react to the various actions
function newPersons(state:Person[], action:Action, editedPerson):Person[] {
    let persons:Person[];
    if (!state) {
        persons = require('../../seed-data/persons');
        persons.forEach(addIdToPerson);
        return persons;
    }
    switch (action.type) {
    case REPLACE_PERSONS:
        return action.data;
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
          .map((p) => dropIdFromPerson(p))
          .map((p) => JSON.stringify(p, null, " "))  // Get a string dump
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

// This is the reducer function, which combines the behaviours of the
// different components of the application
export function getNextState(state:AppState={}, action:Action):AppState {
    const persons = newPersons(state.persons, action, state.editedPerson);
    const dataDump = newDataDump(state.dataDump, action, persons);
    const isAdding = newIsAdding(state.isAdding, action);
    const editedPerson = newEditedPerson(state.editedPerson, action);
    return {
        persons,
        dataDump,
        isAdding,
        editedPerson
    }
};

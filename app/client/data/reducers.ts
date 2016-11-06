// The file containes Redux reducer function

import { Person } from './person';
import { AppState } from './state';
import {
    Action, REPLACE_PERSONS, DELETE_PERSON, SHOW_DIALOG,
    DIALOG_OK, DIALOG_CANCEL
} from './actions';

const appendDump = (state:AppState, persons:Person[]) =>
      state.dataDump + "===New data:===\n" + JSON.stringify(state.persons);

function mutateState(state:AppState, change:AppState) {
    return Object.assign({}, state, change);
}

// This is the reducer function
export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const persons:Person[] = require('../../seed-data/persons');
        const result:AppState = {
            persons,
            dataDump: "",
            isAdding: false,
        };
        return result;
    }
    let persons:Person[];
    console.log("Action:", action);
    switch (action.type) {
    case REPLACE_PERSONS:
        return mutateState(state, {
            persons: action.data,
        });
    case DELETE_PERSON:
        persons = state.persons.slice();
        persons.splice(action.index, 1);
        const dataDump = appendDump(state, persons);
        return mutateState(state, {
            persons,
            dataDump
        });
    case SHOW_DIALOG:
        return mutateState(state, {
            isAdding: true,
            editedPerson: {
                name: "Please enter name",
                job: "Please enter job title",
                age: "Please enter age",
                nick: "Please enter nickname",
                employee: false,
            }
        });
    case DIALOG_OK:
        persons = state.persons.slice();
        persons.push(state.editedPerson);
        return mutateState(state, {
            persons,
            isAdding: false,
        });
    case DIALOG_CANCEL:
        return mutateState(state, {
            isAdding: false,
        });        
    default:
        return state;
    }    
};

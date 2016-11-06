// The file containes Redux reducer function

import { Person } from './person';
import { AppState } from './state';
import {
    Action, REPLACE_PERSONS, DELETE_PERSON, SHOW_DIALOG,
    EDIT_NAME, EDIT_JOB, EDIT_AGE, EDIT_NICK, SET_EMPLOYEE,
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
        if (state.isAdding) return state;
        return mutateState(state, {
            isAdding: true,
            editedPerson: {
                name: "",
                job: "",
                age: "",
                nick: "",
                employee: false,
            }
        });
    case EDIT_NAME:
        return mutateState(state, {
            editedPerson: Object.assign({}, state.editedPerson, {
                name: action.data
            })
        });
    case EDIT_JOB:
        return mutateState(state, {
            editedPerson: Object.assign({}, state.editedPerson, {
                job: action.data
            })
        });
    case EDIT_AGE:
        return mutateState(state, {
            editedPerson: Object.assign({}, state.editedPerson, {
                age: action.data
            })
        });
    case EDIT_NICK:
        return mutateState(state, {
            editedPerson: Object.assign({}, state.editedPerson, {
                nick: action.data
            })
        });
    case SET_EMPLOYEE:
        return mutateState(state, {
            editedPerson: Object.assign({}, state.editedPerson, {
                employee: action.data
            })
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

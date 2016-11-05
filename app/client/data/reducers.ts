// The file containes Redux reducer function

import { AppStateChange, AppState } from './state';
import { PersonList, wrapRawAppState, wrapRawPersons } from './wrappers';
import { Action, REPLACE_PERSONS, DELETE_PERSON, SHOW_DIALOG } from './actions';

const appendDump = (state:AppState, persons:PersonList) =>
      state.getDataDump() + "===New data:===\n" + state.getPersonDump();

// This is the reducer function
export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const persons = wrapRawPersons(require('../../seed-data/persons'));
        const result:AppState = wrapRawAppState({
            persons,
            dump: "",
            adding: false,
        });
        return result;
    }
//    console.log("Action:", action);
    switch (action.type) {
    case REPLACE_PERSONS:
        return state.mutate({
            persons: action.data,
        });
    case DELETE_PERSON:
        const index = state.getPersonIndex(action.id);
        const persons = state.getPersons().delete(index);
        const dump = appendDump(state, persons);
        return state.mutate({
            persons,
            dump
        });
    case SHOW_DIALOG:
        return state.mutate({
            adding: true,
        });
    default:
        return state;
    }    
};

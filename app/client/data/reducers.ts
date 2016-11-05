// The file containes Redux reducer function

import { AppStateChange, AppState } from './state';
import { wrapRawAppState, wrapRawPersons } from './wrappers';
import { Action, REPLACE_PERSONS, DELETE_PERSON } from './actions';

// This is the reducer function
export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const persons = wrapRawPersons(require('../../seed-data/persons'));
        const result:AppState = wrapRawAppState({
            persons
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
        console.log("Should remove person", action.id);
    default:
        return state;
    }    
};

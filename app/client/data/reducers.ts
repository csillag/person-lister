// The file containes Redux reducer function

import { AppStateChange, AppState } from './state';
import { wrapRawAppState } from './wrappers';
import { Action, REPLACE_PERSONS } from './actions';

// This is the reducer function
export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const result:AppState = wrapRawAppState({
            persons: [],
        });
        return result;
    }
//    console.log("Action:", action);
    switch (action.type) {
    case REPLACE_PERSONS:
        return state.mutate({
            persons: action.data,
        });
    default:
        return state;
    }    
};

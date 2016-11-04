// The file containes Redux reducer function

import { AppStateChange, AppState } from './state';
import { wrapRawAppState } from './wrappers';
import { Action, EDIT_FOO } from './actions';

// This is the reducer function
export function getNextState(state:AppState, action:Action):AppState {
    if (!state) {
        const result:AppState = wrapRawAppState({
            foo: "",
        });
        return result;
    }
//    console.log("Action:", action);
    switch (action.type) {
    case EDIT_FOO:
        return state.mutate({
            foo: action.data,
        });
    default:
        return state;
    }    
};

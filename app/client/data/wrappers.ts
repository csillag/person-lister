// In these files, we define the wrapper objects
// that we are wrapping around the various immutable
// state objects as syntatic sugar, in order to get
// dedicated (and type-safe) getters for our data fields.

import { List, Map } from 'immutable';
import { AppState, AppStateChange } from './state';

class AppStateWrapper implements AppState {

    private state:Map<string,any> = null;

    constructor(state?:Map<string,any>) {
        this.state = state || Map<string,any>({});
    }

    public getFoo() { return this.state.get("foo") }

    // This class also has a mutator method, for creating a new
    // version of the application state.
    public mutate(changes:AppStateChange) {
        return new AppStateWrapper(this.state.merge(changes));
    }
}

export function wrapRawAppState(rawState:AppStateChange):AppState {
    return new AppStateWrapper(Map<string,any>(rawState));
}

// In these files, we define the wrapper objects
// that we are wrapping around the various immutable
// state objects as syntatic sugar, in order to get
// dedicated (and type-safe) getters for our data fields.

const shortid = require('shortid');
import { List, Map } from 'immutable';

import { Person } from './person';
import { AppState, AppStateChange } from './state';
import { PersonList } from './wrappers';

class AppStateWrapper implements AppState {

    private state:Map<string,any> = null;

    constructor(state?:Map<string,any>) {
        this.state = state || Map<string,any>({});
    }

    public getPersons() { return this.state.get("persons") }
    public getDataDump() { return this.state.get("dump") }

    public getPersonIndex(id: string) {
        return this.getPersons().findIndex( (p) => p.id == id)
    }

    public getPersonDump() {
        return "[" +
            this.getPersons().map( (p) => p.getDump() ).join(",\n") +
            "]\n"
    }

    // This class also has a mutator method, for creating a new
    // version of the application state.
    public mutate(changes:AppStateChange) {
        return new AppStateWrapper(this.state.merge(changes));
    }
}

export function wrapRawAppState(rawState:AppStateChange):AppState {
    return new AppStateWrapper(Map<string,any>(rawState));
}

export type PersonList = List<Person>;

class PersonWrapper implements Person {

    private state:Map<string,any> = null;
    private id:string;

    constructor(data:any) {
        this.state = Map<string,any>(data);
        this.id = shortid.generate();
    }

    public getId() { return this.id; }
    public getName() { return this.state.get("name"); }
    public getJob() { return this.state.get("job"); }
    public getAge() { return this.state.get("age"); }
    public getNick() { return this.state.get("nick"); }
    public isEmployee() { return this.state.get("employee"); }

    public getDump() {
        return JSON.stringify(this.state.toObject());
    }
}

function wrapRawPerson(rawPerson):Person {
    return new PersonWrapper(rawPerson);
}

export function wrapRawPersons(rawPersons):PersonList {
    return List<Person>(rawPersons.map(wrapRawPerson));
}

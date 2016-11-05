
// === Our store supports the following actions ===

export const DELETE_PERSON = "DELETE_PERSON"
export const REPLACE_PERSONS = "REPLACE_PERSONS"

// Generic type to describe all actions
export interface Action {
    type: string;
    id?: string;
    data?: any;
}

// === Action generator functions ===

export function deletePerson(id:string):Action {
    return { type: DELETE_PERSON, id }
}

export function replacePersons(persons):Action {
    return { type: REPLACE_PERSONS, data: persons }
}

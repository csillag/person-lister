
// === Our store supports the following actions ===

export const REPLACE_PERSONS = "REPLACE_PERSONS"

// Generic type to describe all actions
export interface Action {
    type: string,
    data?: any;
}

// === Action generator functions ===

export function replacePersons(persons):Action {
    return { type: REPLACE_PERSONS, data: persons }
}


// === Our store supports the following actions ===

export const DELETE_PERSON = "DELETE_PERSON"
export const REPLACE_PERSONS = "REPLACE_PERSONS"
export const SHOW_DIALOG = "SHOW_DIALOG"
export const DIALOG_OK = "DIALOG_OK"
export const DIALOG_CANCEL = "DIALOG_CANCEL"

// Generic type to describe all actions
export interface Action {
    type: string;
    index?: number;
    data?: any;
}

// === Action generator functions ===

export function deletePerson(index:number):Action {
    return { type: DELETE_PERSON, index }
}

export function replacePersons(persons):Action {
    return { type: REPLACE_PERSONS, data: persons }
}

export function showDialog():Action { return { type: SHOW_DIALOG } }
export function dialogOK():Action { return { type: DIALOG_OK } }
export function dialogCancel():Action { return { type: DIALOG_CANCEL } }

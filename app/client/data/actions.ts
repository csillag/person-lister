
// === Our store supports the following actions ===

export const DELETE_PERSON = "DELETE_PERSON"
export const REPLACE_PERSONS = "REPLACE_PERSONS"
export const SHOW_DIALOG = "SHOW_DIALOG"
export const DIALOG_OK = "DIALOG_OK"
export const DIALOG_CANCEL = "DIALOG_CANCEL"
export const EDIT_NAME = "EDIT_NAME"
export const EDIT_JOB = "EDIT_JOB"
export const EDIT_AGE = "EDIT_AGE"
export const EDIT_NICK = "EDIT_NICK"
export const SET_EMPLOYEE = "EDIT_EMPLOYEE"

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

export function editName(value:string):Action {
    return { type: EDIT_NAME, data: value }
}

export function editJob(value:string):Action {
    return { type: EDIT_JOB, data: value }
}

export function editAge(value:string):Action {
    return { type: EDIT_AGE, data: value }
}

export function editNick(value:string):Action {
    return { type: EDIT_NICK, data: value }
}

export function setEmployee(value:boolean):Action {
    return { type: SET_EMPLOYEE, data: value }
}

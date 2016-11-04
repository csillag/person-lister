
// === Our store supports the following actions ===

export const EDIT_FOO = "EDIT_FOO";

// Generic type to describe all actions
export interface Action {
    type: string,
    data?: any;
}

// === Action generator functions ===

export function editFoo(value:string):Action {
    return { type: EDIT_FOO, data: value }
}

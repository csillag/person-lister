var shortid = require('shortid');

// This is the data structure of the person.
export interface Person {
    id:string; // This is used only internally
    name:string;
    job:string;
    age:string;
    nick:string;
    employee:boolean;
}

// Functions for generating, adding and removing IDs to/from persons

export const createPersonId = () => shortid.generate()

export const addIdToPerson = (person:Person) => { person.id = createPersonId() }

export const dropIdFromPerson = (person:Person) => {
    const result:Person = Object.assign({}, person);
    delete(result.id);
    return result;
}

var shortid = require('shortid');

export interface Person {
    id:string;
    name:string;
    job:string;
    age:string;
    nick:string;
    employee:boolean;
}

export const createPersonId = () => shortid.generate()

export const addIdToPerson = (person:Person) => { person.id = createPersonId() }

export const dropIdFromPerson = (person:Person) => {
    const result:Person = Object.assign({}, person);
    delete(result.id);
    return result;
}

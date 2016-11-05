import * as React from 'react';

import { Person } from '../data/Person';

export interface PersonRowProps {
    person: Person;
}

export class PersonRow extends React.Component<PersonRowProps,{}> {
    render() {
        const person = this.props.person;
        return (<tr>
            <td>{ person.getName() }</td>
            <td>{ person.getAge() }</td>
            <td>{ person.getNick() }</td>
                <td><input
                    type="checkbox"
                    checked={ person.isEmployee() }
                    readOnly="true"
                /></td>
            <td>
                <a href="#">Delete</a>
            </td>
        </tr>);
    }
}

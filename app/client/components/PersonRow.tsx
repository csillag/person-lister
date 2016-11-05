import * as React from 'react';

import { Person } from '../data/Person';

export interface PersonRowProps {
    person: Person;
    delete?(id:string):void;
}

export class PersonRow extends React.Component<PersonRowProps,{}> {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.delete(this.props.person.getId());
    }

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
                <a href="#" onClick={ this.onClick }>
                    Delete
                </a>
            </td>
        </tr>);
    }
}

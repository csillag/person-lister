// This component represents one row in the person table.

import * as React from 'react';

import { Person } from '../data/Person';

export interface PersonRowProps {
    person: Person;
    index:number;
    delete?(index:number):void;
}

export class PersonRow extends React.Component<PersonRowProps,{}> {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.delete(this.props.index);
    }

    render() {
        const person = this.props.person;
        return (<tr>
            <td className="name-data">
                { person.name }
                { person.job && ( <span><br />{person.job}</span> ) }
            </td>
            <td className="age-data">{ person.age }</td>
            <td className="nick-data">{ person.nick }</td>
            <td className="employee-data"><input
                type="checkbox"
                checked={ person.employee }
                readOnly="true"
            /></td>
            <td className="delete-data">
                <a href="#" onClick={ this.onClick }>
                    Delete
                </a>
            </td>
        </tr>);
    }
}

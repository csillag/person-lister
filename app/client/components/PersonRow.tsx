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
            <td>{ person.name }</td>
            <td>{ person.age }</td>
            <td>{ person.nick }</td>
                <td><input
                    type="checkbox"
                    checked={ person.employee }
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

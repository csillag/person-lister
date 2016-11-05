import * as React from 'react';

import { Person } from '../data/Person';
import { PersonList } from '../data/wrappers';

import { PersonRow } from './PersonRow';

export interface PersonTableProps {
    persons?: PersonList;
    delete?(id:string):void;
}

export class PersonTable extends React.Component<PersonTableProps,{}> {

    render() {
        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>Name (job title)</th>
                        <th>Age</th>
                        <th>Nickname</th>
                        <th>Employee</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.persons.map((person) => (
                    <PersonRow
                        person={person}
                        key={person.getId()}
                        delete={this.props.delete}
                    />
                )) }
                </tbody>
                </table>
                </div>)
    }
}

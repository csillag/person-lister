import * as React from 'react';

import { Person } from '../data/Person';

import { PersonRow } from './PersonRow';

export interface PersonTableProps {
    persons?: Person[];
    delete?(index:number):void;
}

export class PersonTable extends React.Component<PersonTableProps,{}> {

    render() {
        const persons = this.props.persons
        let index:number;
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
                { persons.map((person) => {
                    index = persons.indexOf(person);
                    return (<PersonRow
                        person={person}
                        index={index}
                        key={index}
                        delete={this.props.delete}
                    />)
                })}
                </tbody>
                </table>
                </div>)
    }
}

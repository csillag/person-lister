import * as React from 'react';
import { Table } from 'react-bootstrap';

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
        return (
            <div id="main-table-wrapper">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Name (job title)</th>
                            <th className="age-header">Age</th>
                            <th className="nick-header">Nickname</th>
                            <th className="employee-header">Employee</th>
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
                </Table>
            </div>
        )
    }
}

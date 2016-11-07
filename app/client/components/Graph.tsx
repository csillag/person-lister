// This component represents the actual graph we are showing.

import * as React from 'react';

const ChartistGraph = require('react-chartist')

import { Person } from '../data/person';

interface GraphProps {
    persons: Person[];
}

// Calculate the distribution of ages
function calculateDistribution(persons:Person[]) {
    let ageMin: number = 200;
    let ageMax: number = 0;
    let employees = {};
    let others = {};
    let age:number;
    persons.forEach( (person) => {
        age = parseInt(person.age);
        if (!isNaN(age)) {
            if (age < ageMin) ageMin = age;
            if (age > ageMax) ageMax = age;
            if (person.employee) {
                if (employees[age] == null) employees[age] = 0;
                employees[age] ++;
            } else {
                if (others[age] == null) others[age] = 0;
                others[age] ++;
            }
        }
    });
    const labels:number[] = [];
    const serie1:number[] = [];
    const serie2:number[] = [];
    for (let age = ageMin; age <= ageMax; age++) {
        if (employees[age] || others[age]) {
            labels.push(age);
            serie1.push(employees[age]);
            serie2.push(others[age]);
        }
    }

    return {
        labels,
        series: [ serie1, serie2 ],
    }
}

// Define the component showing the graph
export const Graph = (props:GraphProps) => {
    if (!props.persons) return null;
    const chartData = calculateDistribution(props.persons);
    return <ChartistGraph data={chartData} type={'Bar'} />
}

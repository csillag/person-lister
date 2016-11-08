// This component represents the actual graph we are showing.

import * as React from 'react';

const ZChart = require('zingchart-react').core

const chartConfig = require('./chart-config.json');
// Chart configuration based on
// https://www.zingchart.com/gallery/chart/#!population-pyramid-labels

import { Person } from '../data/person';

interface GraphProps {
    persons: Person[];
}

// These are the age ranges that we will use
// for the age distribution graph
const ageRanges:number[][] = [
    [0, 4],
    [5, 9],
    [10, 14],
    [15, 19],
    [20, 24],
    [25, 29],
    [30, 34],
    [35, 39],
    [40, 44],
    [45, 49],
    [50, 54],
    [55, 59],
    [60, 64],
    [65, 69],
    [70, 74],
    [75, 79],
    [80, 84],
    [85, 89],
    [90, 94],
    [95, 99],
    [100, 200],
];

// Verify if the ranges connect
function verifyRanges():void {
    let lastMax = -1;
    ageRanges.forEach( (range) => {
        if (range[0] != lastMax + 1) {
            console.log("Error: defined age range", range, "is not connected to the previous range!");
        }
        lastMax = range[1];
    });
}

// When launching the app, check if the defined age ranges make sense
verifyRanges();

// Render the defined age ranges into string labels
function renderAgeRangeLabels():string[] {
    const results:string[] = [];
    results.push("");
    ageRanges.forEach( (range) => {
        results.push(range[0] + "-" + range[1]);
    });
    results.push("");
    return results;
}

// Prepare the age range labels once and for all
chartConfig.graphset[1]["scale-x"].values = renderAgeRangeLabels();

// Calculate the distribution of ages
function calculateAgeRangeDistribution(persons:Person[]) {
    let employees = {};
    let others = {};
    let totalCount = 0;
    let age:number;
    persons.forEach( (person) => {
        age = parseInt(person.age);
        if (!isNaN(age)) {
            totalCount++;
            if (person.employee) {
                if (employees[age] == null) employees[age] = 0;
                employees[age] ++;
            } else {
                if (others[age] == null) others[age] = 0;
                others[age] ++;
            }
        }
    });

    const serie1:number[] = [];
    const serie2:number[] = [];

    serie1.push(null);
    serie2.push(null);

    let employeeCount;
    let otherCount;

    ageRanges.forEach( (range) => {
        employeeCount = 0;
        otherCount = 0;
        for (let age = range[0]; age <= range[1]; age++) {
            employeeCount += employees[age] || 0
            otherCount += others[age] || 0
        }
        serie1.push(employeeCount / totalCount * 100);
        serie2.push(otherCount / totalCount * 100);
    });

    serie1.push(null);
    serie2.push(null);

    return [serie1, serie2]

}


// Define the component showing the graph
export const ZingChart = (props:GraphProps) => {
    if (!props.persons) return null;

    const distribution = calculateAgeRangeDistribution(props.persons);
    chartConfig.graphset[1].series[0].values = distribution[0];
    chartConfig.graphset[1].series[1].values = distribution[1];

    return <ZChart id="myChart" height="600" width="600" data={chartConfig} />

}

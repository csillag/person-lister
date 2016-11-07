import * as React from 'react';

const ChartistGraph = require('react-chartist')

import { Person } from '../data/person';

export interface GraphProps {
    persons: Person[];
}

export const Graph = (props:GraphProps) => {
    const simpleLineChartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    }
    return <ChartistGraph data={simpleLineChartData} type={'Line'} />
}

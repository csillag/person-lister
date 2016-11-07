import * as React from 'react';

import { Person } from '../data/Person';

import { Spinner } from './Spinner';
import { PersonTable } from './PersonTable';

export interface DataAreaProps {
    loading?: boolean;
    message?: string;
    persons?: Person[];
    delete?(index:number):void;
}

// A simple component to indicate that we are loading
const LoadingIndicator = () => (
        <div id="loading-indicator">Loading...<Spinner /></div>
)

interface DataMessageProps {
    message: string;
}

// A simple component to show a message, instead of the data
const DataMessage = (props:DataMessageProps) => (
        <div id="data-message">{ props.message }</div>
)

export const DataArea = (props:DataAreaProps) => {
    if (props.loading) return <LoadingIndicator />
    if (props.message) return <DataMessage message={ props.message } />
    return <PersonTable persons={props.persons} />
}


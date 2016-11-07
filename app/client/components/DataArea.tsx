import * as React from 'react';
import { Button } from 'react-bootstrap';

import { Person } from '../data/Person';

import { Spinner } from './Spinner';
import { PersonTable } from './PersonTable';

export interface DataAreaProps {
    loading?: boolean;
    message?: string;
    persons?: Person[];
    load?():void;
    delete?(index:number):void;
}

// A simple component to indicate that we are loading
const LoadingIndicator = () => (
        <div id="loading-indicator">Loading...<Spinner /></div>
)

interface DataMessageProps {
    message: string;
    load():void;
}

// A simple component to show a message, instead of the data
const DataMessage = (props:DataMessageProps) => (
    <div id="data-message">
        <div>{ props.message }</div>
        <Button onClick={ props.load }>Try to load again</Button>
    </div>
)

export const DataArea = (props:DataAreaProps) => {
    if (props.loading) return <LoadingIndicator />
    if (props.message) return <DataMessage
        load={ props.load }
        message={ props.message }
    />
    return <PersonTable
        delete={ props.delete }
        persons={ props.persons }
    />
}

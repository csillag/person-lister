import * as React from 'react';
import { Panel, Button } from 'react-bootstrap';

export interface TopControlsProps {
    add?():void;
}

export const TopControls = (props:TopControlsProps) => (
    <Panel>
        <Button onClick={ props.add }>Add</Button>
    </Panel>
);

// This component represents the control buttons on the top of the app.

import * as React from 'react';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';

export interface TopControlsProps {
    add?():void;
    graph?():void;
}

export const TopControls = (props:TopControlsProps) => (
    <ButtonToolbar id="top-controls">
        <Button onClick={ props.add }>Add</Button>
        <Button onClick={ props.graph }>Graph</Button>
    </ButtonToolbar>
);

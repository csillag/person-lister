import * as React from 'react';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';

export interface TopControlsProps {
    add?():void;
}

export const TopControls = (props:TopControlsProps) => (
    <ButtonToolbar id="top-controls">
        <Button onClick={ props.add }>Add</Button>
    </ButtonToolbar>
);

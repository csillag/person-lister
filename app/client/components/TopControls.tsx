import * as React from 'react';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';

export interface TopControlsProps {
    add?():void;
}

export const TopControls = (props:TopControlsProps) => (
    <ButtonToolbar style={{ padding: '1em 0' }}>
        <Button onClick={ props.add }>Add</Button>
    </ButtonToolbar>
);

import * as React from 'react';

import { Button } from 'react-bootstrap';

export interface AddButtonProps {
    add?():void;
}

export const AddButton = (props:AddButtonProps) => (
        <div>
        <Button onClick={ props.add }>Add</Button>
        </div>
)

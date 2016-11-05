import * as React from 'react';

export interface AddButtonProps {
    add?():void;
}

export const AddButton = (props:AddButtonProps) => (
    <button onClick={ props.add }>Add</button>
)

import * as React from 'react';

import { AddButton, AddButtonProps } from './AddButton';

export interface TopControlsProps extends AddButtonProps {
}

export const TopControls = (props:TopControlsProps) => (
    <div>
        <AddButton add={ props.add } />
    </div>
);

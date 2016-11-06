import * as React from 'react';

import { Person } from '../data/person';

export interface AddDialogProps {
    shown?: boolean;
    person?: Person;
    editName?(value:string):void;
    editJob?(value:string):void;
    editAge?(value:string):void;
    editNickname?(value:string):void;
    setEmployee?(value:boolean):void;
    ok?():void;
    cancel?():void;
}

export class AddDialog extends React.Component<AddDialogProps,{}> {
    render() {
        if (!this.props.shown) return null;
        return (<div>
                <h3>Add dialog</h3>
                {JSON.stringify(this.props.person)}
                <button onClick={this.props.ok}>OK</button>
                <button onClick={this.props.cancel}>Cancel</button>
        </div>)
    }
}

import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';

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
        return (
            <Modal show={this.props.shown} onHide={this.props.cancel}>
                <Modal.Header>
                    <Modal.Title>Add a new person</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {JSON.stringify(this.props.person)}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.ok} bsStyle="primary">
                        Ok
                    </Button>
                    <Button onClick={this.props.cancel}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

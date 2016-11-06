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

export const AddDialog = (props:AddDialogProps) => (
    <Modal show={props.shown} onHide={props.cancel}>
        <Modal.Header>
            <Modal.Title>Add a new person</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            {JSON.stringify(props.person)}
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={props.ok} bsStyle="primary">
                Ok
            </Button>
            <Button onClick={props.cancel}>
                Cancel
            </Button>
        </Modal.Footer>
    </Modal>
)

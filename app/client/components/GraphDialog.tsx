import * as React from 'react';
import {
    Button, Col, Modal,
    Form, FormGroup, FormControl, ControlLabel, Checkbox
} from 'react-bootstrap';


import { Person } from '../data/person';

export interface GraphDialogProps {
    shown?: boolean;
    persons?: Person[];
    hide?():void;
}

export class GraphDialog extends React.Component<GraphDialogProps, {}> {

    render() {
        return (
            <Modal show={this.props.shown} onHide={this.props.hide}>
                <Modal.Header>
                    <Modal.Title>Some graph</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>Some cool graph here</div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.hide}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

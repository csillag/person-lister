import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';

import { Person } from '../data/person';

import { Graph } from './Graph';

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
                    <Graph persons={this.props.persons} />
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

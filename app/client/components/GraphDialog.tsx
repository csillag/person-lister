// This component represents the graph dialog.

import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';

import { Person } from '../data/person';

import { ChartistChart } from './ChartistChart';
import { ZingChart } from './ZingChart';

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
                    <Modal.Title>Distribution of age</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ChartistChart persons={this.props.persons} />
                    <div>
                        This graph shows the distribution of the age
                        of the people in the persons list.
                        (The green bars mark the employees,
                        the orange ones mark the others on the list.)
                    </div>
                    <ZingChart persons={this.props.persons} />
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

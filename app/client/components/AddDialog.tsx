import * as React from 'react';
import {
    Button, Col, Modal,
    Form, FormGroup, FormControl, ControlLabel, Checkbox
} from 'react-bootstrap';

import { Person } from '../data/person';

export interface AddDialogProps {
    shown?: boolean;
    person?: Person;
    editName?(value:string):void;
    editJob?(value:string):void;
    editAge?(value:string):void;
    editNick?(value:string):void;
    setEmployee?(value:boolean):void;
    ok?():void;
    cancel?():void;
}

export class AddDialog extends React.Component<AddDialogProps, {}> {

    constructor(props:AddDialogProps) {
        super(props);

        this.onEditName = this.onEditName.bind(this);
        this.onEditJob = this.onEditJob.bind(this);
        this.onEditAge = this.onEditAge.bind(this);
        this.onEditNick = this.onEditNick.bind(this);
        this.onSetEmployee = this.onSetEmployee.bind(this);
    }

    onEditName(e) { this.props.editName(e.target.value); }
    onEditJob(e) { this.props.editJob(e.target.value); }
    onEditAge(e) { this.props.editAge(e.target.value); }
    onEditNick(e) { this.props.editNick(e.target.value); }
    onSetEmployee(e) { this.props.setEmployee(e.target.checked); }

    isAcceptable(person:Person):boolean {
        return !!(person && person.name && person.age)
    }

    render() { return (
    <Modal show={this.props.shown} onHide={this.props.cancel}>
        <Modal.Header>
            <Modal.Title>Add a new person</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            { this.props.person && <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Name*
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            placeholder="Please enter name (required)"
                            value={this.props.person.name}
                            onChange={this.onEditName}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Job title
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            placeholder="Please enter job title"
                            value={this.props.person.job}
                            onChange={this.onEditJob}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Age*
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            placeholder="Please enter age (required)"
                            value={this.props.person.age}
                            onChange={this.onEditAge}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Nickname
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            placeholder="Please enter nickname"
                            value={this.props.person.nick}
                            onChange={this.onEditNick}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Checkbox
                            checked={this.props.person.employee}
                            onChange={this.onSetEmployee}
                        >
                            Employee
                        </Checkbox>
                    </Col>
                </FormGroup>

            </Form> }
        </Modal.Body>

        <Modal.Footer>
            <Button
                disabled={!this.isAcceptable(this.props.person)}
                onClick={this.props.ok}
                bsStyle="primary"
            >
                Ok
            </Button>
            <Button onClick={this.props.cancel}>
                Cancel
            </Button>
        </Modal.Footer>
    </Modal>
    )}
}

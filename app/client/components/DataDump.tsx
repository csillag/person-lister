import * as React from 'react';
import {
    Button, Col, Modal,
    Form, FormGroup, FormControl, ControlLabel, Checkbox
} from 'react-bootstrap';

export interface DataDumpProps {
    dump:string;
}

export class DataDump extends React.Component<DataDumpProps,{}> {

    render() {
        return (
            <Form id="dump-form">
                <FormGroup className="full-height">
                    <ControlLabel>Data Dump</ControlLabel>
                    <FormControl
                        className="full-height"
                        componentClass="textarea"
                        placeholder="No change yet."
                        value={ this.props.dump }
                    />
                </FormGroup>
            </Form>
        )
    }
}

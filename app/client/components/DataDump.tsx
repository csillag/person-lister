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
            <Form style={{
                height: "35vh",
                paddingTop: "1em"
            }}>
                <FormGroup style={{ height: "100%"}}>
                    <ControlLabel>Data Dump</ControlLabel>
                    <FormControl
                        style={{ height: "100%" }}
                        componentClass="textarea"
                        placeholder="No change yet."
                        value={ this.props.dump }
                    />
                </FormGroup>
            </Form>
        )
    }
}

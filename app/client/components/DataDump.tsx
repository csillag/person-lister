// This component represents the Data Dump window.

import * as React from 'react';
import {
    Button, Col, Panel,
    Form, FormGroup, FormControl, ControlLabel, Checkbox
} from 'react-bootstrap';

export interface DataDumpProps {
    dump:string;
}

export class DataDump extends React.Component<DataDumpProps,{}> {

    private endMarker: any;

    componentDidUpdate(prevProps) {
        if (this.props.dump != prevProps.dump) this.endMarker.scrollIntoView();
    }

    getHtmlDump() {
        return { __html: this.props.dump.replace(/\n/g, "<br />") }
    }

    render() {
        return (
            <Panel id="dumping-panel" header="Data Dump">
                <div dangerouslySetInnerHTML={this.getHtmlDump()} />
                <span ref={ (input) => this.endMarker = input} >&nbsp;</span>
            </Panel>
        )
    }
}

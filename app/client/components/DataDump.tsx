import * as React from 'react';

export interface DataDumpProps {
    dump:string;
}

export class DataDump extends React.Component<DataDumpProps,{}> {

    render() {
        return (<div>
                <div>Data Dump</div>
                <textarea
                    value={ this.props.dump }
                    readOnly="true"
                />
                </div>)
    }
}

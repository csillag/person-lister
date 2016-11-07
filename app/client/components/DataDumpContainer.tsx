// This is a container for the DataDump component,
// connecting it to the data/behavior defined in Redux.

import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { DataDump, DataDumpProps } from './DataDump';

function mapStateToProps(state:AppState):DataDumpProps {
    return {
        dump: state.dataDump,
    }
}

export const DataDumpContainer = connect(
    mapStateToProps,
)(DataDump);

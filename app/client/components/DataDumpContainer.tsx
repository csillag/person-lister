import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { DataDump, DataDumpProps } from './DataDump';

function mapStateToProps(state:AppState):DataDumpProps {
    return {
        dump: state.getDataDump(),
    }
}

export const DataDumpContainer = connect(
    mapStateToProps,
)(DataDump);

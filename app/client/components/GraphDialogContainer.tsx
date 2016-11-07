// This is a container for the GraphDialog component,
// connecting it to the data/behavior defined in Redux.


import { connect } from 'react-redux'
import { AppState } from '../data/state';
import { hideGraph } from '../data/actions';

import { GraphDialog, GraphDialogProps } from './GraphDialog';

function mapStateToProps(state:AppState):GraphDialogProps {
    return {
        shown: state.showGraph,
        persons: state.persons,
    }
}

function mapDispatchToProps(dispatch, foo, bar):GraphDialogProps {
    return {
        hide: () => { dispatch(hideGraph()) },
    }
}

export const GraphDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GraphDialog);

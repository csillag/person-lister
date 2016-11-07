
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

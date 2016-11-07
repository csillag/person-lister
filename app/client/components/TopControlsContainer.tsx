import { connect } from 'react-redux'

import { AppState } from '../data/state';

import { showDialog, showGraph } from '../data/actions';
import { TopControls, TopControlsProps } from './TopControls';

function mapStateToProps(state:AppState):TopControlsProps {
    return {
    }
}

function mapDispatchToProps(dispatch, foo, bar):TopControlsProps {
    return {
        add: () => { dispatch(showDialog()) },
        graph: () => { dispatch(showGraph()) },
    }
}

export const TopControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopControls);

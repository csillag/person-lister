import { connect } from 'react-redux'

import { AppState } from '../data/state';

import { showDialog } from '../data/actions';
import { TopControls, TopControlsProps } from './TopControls';

function mapStateToProps(state:AppState):TopControlsProps {
    return {
    }
}

function mapDispatchToProps(dispatch, foo, bar):TopControlsProps {
    return {
        add: () => { dispatch(showDialog()) },
    }
}

export const TopControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopControls);


import { connect } from 'react-redux'

import { AppState } from '../data/state';

import { AddDialog, AddDialogProps } from './AddDialog';

function mapStateToProps(state:AppState):AddDialogProps {
    return {
        shown: state.isAdding,
    }
}

function mapDispatchToProps(dispatch, foo, bar):AddDialogProps {
    return {
//        edit: (url:string) => { dispatch(editUrl(url)) },
//        submit: () => { dispatch(submitUrl()) }
    }
}

export const AddDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDialog);


import { connect } from 'react-redux'
import { AppState } from '../data/state';
import { dialogOK, dialogCancel } from '../data/actions';

import { AddDialog, AddDialogProps } from './AddDialog';

function mapStateToProps(state:AppState):AddDialogProps {
    return {
        shown: state.isAdding,
        person: state.editedPerson,
    }
}

function mapDispatchToProps(dispatch, foo, bar):AddDialogProps {
    return {
        ok: () => { dispatch(dialogOK()) },
        cancel: () => { dispatch(dialogCancel()) },        
    }
}

export const AddDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDialog);

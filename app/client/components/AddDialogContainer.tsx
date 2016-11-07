// This is a container for the AddDialog component,
// connecting it to the data/behavior defined in Redux.

import { connect } from 'react-redux'
import { AppState } from '../data/state';
import {
    dialogOK, dialogCancel,
    editName, editJob, editAge, editNick, setEmployee
} from '../data/actions';

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
        editName: (value:string) => { dispatch(editName(value)) },
        editJob: (value:string) => { dispatch(editJob(value)) },
        editAge: (value:string) => { dispatch(editAge(value)) },
        editNick: (value:string) => { dispatch(editNick(value)) },
        setEmployee: (value:boolean) => { dispatch(setEmployee(value)) }
    }
}

export const AddDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDialog);

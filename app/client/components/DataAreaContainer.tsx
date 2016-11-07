// This is a container for the DataArea component,
// connecting it to the data/behavior defined in Redux.

import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { loadPersons, deletePerson } from '../data/actions';

import { DataArea, DataAreaProps } from './DataArea';

function mapStateToProps(state:AppState):DataAreaProps {
    return {
        loading: state.isLoading,
        message: state.dataMessage,
        persons: state.persons
    }
}

function mapDispatchToProps(dispatch, foo, bar):DataAreaProps {
    return {
        load: () => { dispatch(loadPersons()) },
        delete: (index:number) => { dispatch(deletePerson(index)) },
    }
}

export const DataAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataArea);

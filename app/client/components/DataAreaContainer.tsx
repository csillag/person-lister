import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { deletePerson } from '../data/actions';

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
        delete: (index:number) => { dispatch(deletePerson(index)) },
    }
}

export const DataAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataArea);

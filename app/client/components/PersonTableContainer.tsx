import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { deletePerson } from '../data/actions';

import { PersonTable, PersonTableProps } from './PersonTable';

function mapStateToProps(state:AppState):PersonTableProps {
    return {
        loading: state.loading,
        persons: state.persons
    }
}

function mapDispatchToProps(dispatch, foo, bar):PersonTableProps {
    return {
        delete: (index:number) => { dispatch(deletePerson(index)) },
    }
}

export const PersonTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonTable);

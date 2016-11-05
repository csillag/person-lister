import { connect } from 'react-redux'

import { AppState } from '../data/state';
import { deletePerson } from '../data/actions';

import { PersonTable, PersonTableProps } from './PersonTable';

function mapStateToProps(state:AppState):PersonTableProps {
    return {
        persons: state.getPersons()
    }
}

function mapDispatchToProps(dispatch, foo, bar):PersonTableProps {
    return {
        delete: (id:string) => { dispatch(deletePerson(id)) },
    }
}

export const PersonTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonTable);

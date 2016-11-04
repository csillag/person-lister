// This file declared the Redux state store.

import { Store, createStore, applyMiddleware } from 'redux';

import { AppState } from './state';
import { getNextState } from './reducers';
import { fetchMiddleware } from '../logic/fetch';

export const store:Store<AppState> = createStore(
    getNextState,
    applyMiddleware(fetchMiddleware)
);

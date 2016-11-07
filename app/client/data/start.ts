import { store } from '../data/store';
import { loadPersons } from '../data/actions';

setTimeout(() => {
    store.dispatch(loadPersons())
}, 100);

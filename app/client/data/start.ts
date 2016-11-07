import { store } from '../data/store';
import { loadPersons } from '../data/actions';

// Upon loading the application,
setTimeout(() => {
    store.dispatch(loadPersons()) // Trigger loading the data
}, 100);

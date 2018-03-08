import {createStore} from 'redux';
//the only place you import from redux is in your store. everywhere else is imported from react redux
import reducer from './reducer';

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
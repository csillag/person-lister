// To load data from the server side, we are using the
// redux-axios-middleware:
// https://github.com/svrcekmichal/redux-axios-middleware
// (Recommended in the Redux documentation, here:
// http://redux.js.org/docs/introduction/Ecosystem.html#middleware )

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const baseURL = "";

export const fetchMiddleware = axiosMiddleware(axios.create({
    baseURL,
    responseType: 'text'
}));

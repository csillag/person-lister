// This files describes the proxy we are using to get the data.

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const baseURL = "/";

// We are using axios to send our HTTP requests. Here, we prepare the redux middleware for it.

export const fetchMiddleware = axiosMiddleware(axios.create({
    baseURL,
    responseType: 'text'
}));


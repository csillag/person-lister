import * as React from 'react';
import { Provider } from 'react-redux'

import { store } from '../data/store';

import { GithubRibbon } from './GithubRibbon';

// This React component represents the whole application
export const App = () => (
        <Provider store={store}>
            <div>
                <GithubRibbon url="csillag/template-10" />
                <div className="panel-heading">
                    <h3 className="panel-title">App title</h3>
                </div>

                <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                    App UI comes here 
                </div>
                

            </div>
        </Provider>
)

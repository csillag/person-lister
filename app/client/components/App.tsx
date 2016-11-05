import * as React from 'react';
import { Provider } from 'react-redux'

import { store } from '../data/store';

import { GithubRibbon } from './GithubRibbon';
import { TopControlsContainer } from './TopControlsContainer';
import { PersonTableContainer } from './PersonTableContainer';
import { DataDumpContainer } from './DataDumpContainer';
import { AddDialogContainer } from './AddDialogContainer';

// This React component represents the whole application
export const App = () => (
        <Provider store={store}>
            <div>
                <GithubRibbon url="csillag/person-lister" />
                <div className="panel-heading">
                    <h3 className="panel-title">csillag's Person Lister</h3>
                </div>

                <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                    <TopControlsContainer />
                    <PersonTableContainer />
                    <DataDumpContainer />
                    <AddDialogContainer />
                </div>
                

            </div>
        </Provider>
)

import * as React from 'react';
import { Provider } from 'react-redux'

import { store } from '../data/store';
import { wrapRawPersons } from '../data/wrappers';

import { GithubRibbon } from './GithubRibbon';
import { TopControls } from './TopControls';
import { PersonTable } from './PersonTable';

import { DataDump } from './DataDump';

const persons = wrapRawPersons(require('../../seed-data/persons'));

// This React component represents the whole application
export const App = () => (
        <Provider store={store}>
            <div>
                <GithubRibbon url="csillag/person-lister" />
                <div className="panel-heading">
                    <h3 className="panel-title">csillag's Person Lister</h3>
                </div>

                <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                    <TopControls />
                    <PersonTable persons={persons} />
                    <DataDump dump="no dump yet" />
                </div>
                

            </div>
        </Provider>
)

import * as React from 'react';
import { Provider } from 'react-redux'
import { PageHeader, Col } from 'react-bootstrap';

import { store } from '../data/store';

import { GithubRibbon } from './GithubRibbon';
import { TopControlsContainer } from './TopControlsContainer';
import { DataAreaContainer } from './DataAreaContainer';
import { DataDumpContainer } from './DataDumpContainer';
import { AddDialogContainer } from './AddDialogContainer';

// This React component represents the whole application
export const App = () => (
    <Provider store={store}>
        <div>
            <GithubRibbon url="csillag/person-lister" />
            <PageHeader>csillag's Person Lister</PageHeader>
            <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <TopControlsContainer />
                <DataAreaContainer />
                <DataDumpContainer />
                <AddDialogContainer />
            </Col>
        </div>
    </Provider>
)

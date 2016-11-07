import * as React from 'react';
import { Provider } from 'react-redux'
import { Col, Navbar } from 'react-bootstrap';

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
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">csillag's Person Lister</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
            <GithubRibbon url="csillag/person-lister" />
            <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                <TopControlsContainer />
                <DataAreaContainer />
                <DataDumpContainer />
                <AddDialogContainer />
            </Col>
        </div>
    </Provider>
)

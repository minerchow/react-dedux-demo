import React, { Component } from 'react';
import { render } from 'react-dom';
import Index from '../src/components/index';
import { Provider } from 'react-redux';
import store from './store';
const App = (
    <Provider store={store}>
        <Index />
    </Provider>
)
render(App, document.getElementById('app'));

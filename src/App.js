import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Index from './components/Index/Index';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <Router history={hashHistory}>
                <Route path="/" component={Index}/>
                <Route path="/news/" component={Index}/>
            </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;

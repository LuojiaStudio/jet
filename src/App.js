import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import NewsList from './components/NewsList'
import NewsCard from './components/NewsCard'
import NewsDetail from './components/NewsDetail'
import TopBar from './components/TopBar'
import Slide from './components/Slide'

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TopBar/>
                    <Router history={hashHistory}>
                        <Route path="/" component={NewsList}/>
                        <Route path="/news" component={NewsDetail}/>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

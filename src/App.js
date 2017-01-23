import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewsList from './components/NewsList'
import NewsCard from './components/NewsCard'
import NewsDetail from './components/NewsDetail'
import TopBar from './components/TopBar'
import Slide from './components/Slide'


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TopBar/>
                    <NewsDetail/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

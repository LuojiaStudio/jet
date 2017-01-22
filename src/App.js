import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewsCard from './components/NewsCard'
import TopBar from './components/TopBar'
import Slide from './components/Slide'


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TopBar/>
                    <NewsCard/>
                    <Slide/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

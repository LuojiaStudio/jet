import React, { Component } from 'react';
import './App.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import NewsDetailPage from './components/NewsDetailPage'
import Index from './components/Index';


window.the_url = "http://127.0.0.1:8000";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={hashHistory}>
                    <Route path="/" component={Index}/>
                    <Route path="/:tag" component={Index}/>
                    <Route path="/news/:id" component={NewsDetailPage}/>
                </Router>
            </div>
        );
    }
}

export default App;

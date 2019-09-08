import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Login from '../Container/Login';
import News from '../Container/News';


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/news" component={News} />
            </Router>
        )
    }
}

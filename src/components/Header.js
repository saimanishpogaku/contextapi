import React, { Component } from 'react';
import '../App.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App-header">
                <h1>React posts website</h1>
            </div>
        )
    }
}
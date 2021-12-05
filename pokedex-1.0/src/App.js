import React, { Component } from 'react';
import Pokedex from './Pokedex';
//import './App.css'

class App extends Component {
	//render a single pokedex
    render() {
        return (
			<div className="App">
            	<Pokedex />
			</div>
        );
    }
}

export default App;

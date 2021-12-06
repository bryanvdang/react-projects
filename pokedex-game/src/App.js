import React, { Component } from 'react';
import Pokegame from './Pokegame';
import './App.css'

class App extends Component {
	//render a single pokedex
    render() {
        return (
			<div className="App">
            	<Pokegame />
			</div>
        );
    }
}

export default App;

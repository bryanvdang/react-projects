// shows a single pokemon, with their name, image, and type
// pass in img, name, type, exp as a prop

//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
import React, { Component } from 'react';
import './Pokecard.css';

const POKI_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKI_API}${this.props.id}.png`;
        // let imgSrc = `${POKI_API}${2}.png`;

        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <div>
                    <img src={imgSrc} alt = {this.props.name} />
                </div>
                <div>Type: {this.props.type}</div>
                <div>Type: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard
// shows a single pokemon, with their name, image, and type
// pass in img, name, type, exp as a prop

//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
import React, { Component } from 'react';
import './Pokecard.css';

const POKI_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number = 999 ? `00${number}`.slice(-3) : number);
//e.g. if number is greater than 999 return that, otherwise, add 2 zeros to the number and take the last 3 digits
// 2 -> 002, take the last three which is 002
// 24 -> 0024, you take 024

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKI_API}${padToThree(this.props.id)}.png`;

        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt = {this.props.name} />
                </div>
                <div className="Pokecard-data">Type: {this.props.exp}</div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
            </div>
        );
    }
}
 
export default Pokecard
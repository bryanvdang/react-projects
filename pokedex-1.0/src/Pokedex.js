// manage all of the pokecards
// use default props to use this default list
//loop through array and create a new pokecard for each one
import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
            {id: 42, name: 'Golbat', type: 'poison/flying', base_experience: 167},
            {id: 51, name: 'Dugtrio', type: 'ground', base_experience: 183},
            {id: 64, name: 'Kadabra', type: 'psychic', base_experience: 155},
            {id: 86, name: 'Seel', type: 'water', base_experience: 87},
            {id: 95, name: 'Onix', type: 'ground', base_experience: 174},
            {id: 103, name: 'Exeggutor', type: 'grass/psychic', base_experience: 211},
            {id: 121, name: 'Starmie', type: 'water', base_experience: 244},
            {id: 143, name: 'Snorlax', type: 'normal', base_experience: 288}
        ]
    };
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;




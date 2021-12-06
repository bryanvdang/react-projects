import React, { Component } from 'react'
import Pokedex from './Pokedex';
import './Pokecard.css';

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
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
        let hand1 = [];
        let hand2 = [...this.props.pokemon]; //stores all the pokemone, we are going to loop, while this array is larger than hand1, randomly pick and add to hand1
        while(hand1.length < hand2.length){
            let randomIndex = Math.floor(Math.random() * hand2.length); //gets us random index from hand2 arrays
            let randPokemon = hand2.splice(randomIndex, 1)[0]; //
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        return(
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}
export default Pokegame
import { useEffect, useRef, useState } from "react";
import PokemonItem from "./PokemonItem";
import usePokemons from './usePokemons'

const Pokemom = () => {
    const [pokemonName, setPokemonName] = useState("ivysaur");
    const [pokemonsAbilities, setPokemonsAbilities] = useState([]);
    const [allPokemons, pokemonCount] = usePokemons();
    const refPokemonName = useRef(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        /* 
            This to show that by changing the value 
            of the `pokemonName` state const we can trigger the useEffect
            bellow that is using it as a dependency
        */
        setPokemonName(refPokemonName.current.value);
    };

    //This effect could be also a custom effect if we decide
    useEffect(() => {
        setPokemonsAbilities([]);

        if(!pokemonName) {
            return;
        }

        fetchPokemontAbilities(pokemonName);

        async function fetchPokemontAbilities(name) {
            const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
                mode :"cors"
            });
        
            console.log('calling Pokemon Abilities API Endpoint');    
            const json = await rest.json();
            
            const abilities = json?.abilities?.map((ability => ability.ability.name));
            setPokemonsAbilities(abilities);
        }
    },[pokemonName]);

    return <div>
        <h3>All Pokemons</h3>
        <h4>Number of Pokemons: {pokemonCount}</h4>

        <div>
        {
            allPokemons?.map((pokemon) => {
                return <PokemonItem pokemon={pokemon} key={pokemon.name}/>
            })
        }
        </div>

        <form onSubmit={onFormSubmit}>
            <label htmlFor="Pokemon Name">
                <input defaultValue={pokemonName} ref={refPokemonName} />
            </label>
            <button>Search Abilities</button>
        </form>
        {/* El contenido de este div (Abilities) 
        pudiera ser otro component */}
        <div>
            <h3>Abilities for {pokemonName}</h3>
            <ul>
            {pokemonsAbilities?.map((ability) => {
                return <li key={ability}>{ability}</li>
            })}
            </ul>
        </div>
    </div>
}

export default Pokemom
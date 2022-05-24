import { useEffect, useState } from "react";

function usePokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonsCount, setPokemonsCount] = useState(0);

    useEffect(() => {
        getPokemonts();

        async function getPokemonts() {
            //This query returns only the first 20 items (pagination)
            const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {mode :"cors"})
        
            console.log('calling API');    
            const json = await rest.json();
            
            setPokemons(json.results);
            setPokemonsCount(json.count);
        }
    },[]);

    return [pokemons, pokemonsCount];
}


function usePokemonAbilities(pokemonName) {
    const [pokemonsAbilities, setPokemonsAbilities] = useState([]);

    useEffect(() => {
        getPokemontAbilities(pokemonName);

        async function getPokemontAbilities(name) {
            const rest = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {mode :"cors"})
        
            console.log('calling Abilities API Endpoint');    
            const json = await rest.json();
            
            const abilities = json?.results?.abilities?.map((ability => ability.ability.name));
            setPokemonsAbilities(abilities);
        }
    },[pokemonName]);

    return pokemonsAbilities;
}

export default usePokemons
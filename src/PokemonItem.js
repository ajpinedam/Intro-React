import * as styles from './PokemonItem.module.css'
export default function PokemonItem({pokemon}) {
    return <>
        <p className={styles.pokemon_name}><span >Pokemon Name:</span> {pokemon.name}</p>
        <p className={styles.pokemon_url}><span>Pokemon Url:</span> <a href={pokemon.url}>{pokemon.url}</a></p>
    </>
    
}
import { useEffect, useState } from 'react';
import RecipeReviewCard from '../ReviewCard';
import * as S from "./styles"

const CustomTable = () => {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    try {
      const result = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
      const data = await result.json();
      console.log(data);
      setPokemon(data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const uniquePokemon = Array.from(new Set(pokemon.map(poke => poke.name)))
    .map(name => pokemon.find(poke => poke.name === name));

  return (
    <S.Container>
      {uniquePokemon.map((poke, index) => (
        <RecipeReviewCard key={index} {...poke} />
      ))}
    </S.Container>
  );
};

export default CustomTable;

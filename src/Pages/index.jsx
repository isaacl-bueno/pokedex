import PokeList from "./PokeList"
import Header from "../Components/Header";
import * as S from './styles'

const Pokedex = () => {
  return (
    <S.Container>
        <Header/>
        <PokeList/>
    </S.Container>
  );
};

export default Pokedex;

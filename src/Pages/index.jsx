import PokeList from "./PokeList"
import Header from "../Components/Header";
import * as S from './styles'
import usePokeDex from "./PokeList/hooks";

const Pokedex = () => {
  const sharedProps = usePokeDex();
  return (
    <S.Container>
      <Header />
      <PokeList {...sharedProps} />
    </S.Container>
  );
};

export default Pokedex;

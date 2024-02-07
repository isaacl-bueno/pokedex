import React from 'react';

// @ Components
import Buttons from './buttons';

// @ Styles
import * as S from "./styles";

export const FilterBy = ({ data }) => {
  return (
    <S.Container>
      <div className='filterBy'>
        Filtrar por:
        <Buttons data={data} />
      </div>
    </S.Container>
  );
}
